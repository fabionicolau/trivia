import './Questions.css';

import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_SCORE } from '../store/actions/types';
import { action } from '../store/actions';

const RANDOM_CHANCE = 0.5;

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectedAnswer: false,
      answers: this.shuffleAnswers(),
      totalpoints: [],
    };
  }

  shuffleAnswers = () => {
    const { question: { correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers } } = this.props;
    const answers = [...incorrectAnswers, correctAnswer];
    return answers.sort(() => Math.random() - RANDOM_CHANCE);
  }

  handleAnswerClick = (answer) => {
    this.setState({ isSelectedAnswer: true });
    const { question, time } = this.props;
    const hard = 3;
    const medium = 2;
    const easy = 1;
    const ten = 10;
    let points = 0;
    if ((answer === question.correct_answer)) {
      if (question.diffculty === 'hard') {
        points = ten + (time * hard);
        this.setState((state) => ({
          totalpoints: [...state.totalpoints, points],
        }), () => this.totalScore());
      }
      if (question.diffculty === 'medium') {
        points = ten + (time * medium);
        this.setState((state) => ({
          totalpoints: [...state.totalpoints, points],
        }), () => this.totalScore());
      }
      points = ten + (time * easy);
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
    const { isSelectedAnswer } = this.state;
    const { time } = this.props;
    if ((isSelectedAnswer) || (time === 0)) {
      if (answer === correct) return 'correct-answer';
      return 'incorrect-answer';
    }
    return 'answer';
  }

  render() {
    const { question, time } = this.props;
    const { answers } = this.state;
    return (
      <div>
        <p data-testid="question-category">{ question.category }</p>
        <p data-testid="question-text">{ question.question }</p>
        <div data-testid="answer-options">
          {answers.map((answer, index) => (
            <button
              type="button"
              disabled={ time === 0 }
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
  time: state.game.time,
});

const mapDispatchToProps = (dispatch) => ({
  setScore: (score) => { dispatch(action(SET_SCORE, score)); },
});

Question.propTypes = {
  question: propTypes.objectOf(propTypes.any),
  time: propTypes.number,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Question);
