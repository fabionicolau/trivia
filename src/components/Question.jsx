import './Questions.css';

import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { action } from '../store/actions';
import {
  INIT_COUNTER,
  PAUSE_TIMER,
  SET_SCORE,
  IS_SELECTED_ANSWER,
} from '../store/actions/types';

const RANDOM_CHANCE = 0.5;

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: this.shuffleAnswers(),
      totalpoints: [],
    };
  }

  componentDidMount() {
    const { initCounter } = this.props;
    initCounter();
  }

  shuffleAnswers = () => {
    const { question: { correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers } } = this.props;
    const answers = [...incorrectAnswers, correctAnswer];
    return answers.sort(() => Math.random() - RANDOM_CHANCE);
  }

  handleAnswerClick = (answer) => {
    const {
      question,
      timer: { counter, id },
      setIsSelectedAnswer,
      pauseTimer,
    } = this.props;
    setIsSelectedAnswer(true);
    clearInterval(id);
    pauseTimer();
    const hard = 3;
    const medium = 2;
    const easy = 1;
    const ten = 10;
    let points = 0;
    if ((answer === question.correct_answer)) {
      if (question.diffculty === 'hard') {
        points = ten + (counter * hard);
        this.setState((state) => ({
          totalpoints: [...state.totalpoints, points],
        }), () => this.totalScore());
      }
      if (question.diffculty === 'medium') {
        points = ten + (counter * medium);
        this.setState((state) => ({
          totalpoints: [...state.totalpoints, points],
        }), () => this.totalScore());
      }
      points = ten + (counter * easy);
      this.setState((state) => ({
        totalpoints: [...state.totalpoints, points],
      }), () => this.totalScore());
    }
  }

  totalScore = () => {
    const { setScore } = this.props;
    const { totalpoints } = this.state;
    let sumPoints = 0;
    sumPoints = totalpoints.reduce((acc, value) => acc + value);
    setScore(sumPoints);
  }

  setClassName = (answer, correct) => {
    const { time, isSelectedAnswer } = this.props;
    if ((isSelectedAnswer) || (time === 0)) {
      return answer === correct
        ? 'correct-answer'
        : 'incorrect-answer';
    }
    return 'answer';
  }

  render() {
    const { question, timer } = this.props;
    const { answers } = this.state;
    return (
      <div>
        <p data-testid="question-category">{ question.category }</p>
        <p data-testid="question-text">{ question.question }</p>
        <div data-testid="answer-options">
          {answers.map((answer, index) => (
            <button
              type="button"
              disabled={ timer.counter === 0 }
              className={ this.setClassName(answer, question.correct_answer) }
              onClick={ () => this.handleAnswerClick(answer) }
              data-testid={
                answer === question.correct_answer
                  ? 'correct-answer' : `wrong-answer-${index}`
              }
              key={ index }
            >
              {answer}
            </button>))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  timer: state.game.timer,
  isSelectedAnswer: state.game.isSelectedAnswer,
});

const mapDispatchToProps = (dispatch) => ({
  initCounter: () => dispatch(action(INIT_COUNTER)),
  pauseTimer: () => dispatch(action(PAUSE_TIMER)),
  setScore: (score) => { dispatch(action(SET_SCORE, score)); },
  setIsSelectedAnswer: (isSelected) => dispatch(action(IS_SELECTED_ANSWER, isSelected)),
});

Question.propTypes = {
  question: propTypes.objectOf(propTypes.any),
  time: propTypes.number,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Question);
