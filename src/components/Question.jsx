import React, { Component } from 'react';
import propTypes from 'prop-types';

const RANDOM_CHANCE = 0.5;

export default class Question extends Component {
  shuffleAnswers() {
    const { question: { correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers } } = this.props;
    const answers = [...incorrectAnswers, correctAnswer];
    return answers.sort(() => Math.random() - RANDOM_CHANCE);
  }

  render() {
    const { question } = this.props;
    if (!question) return '';
    return (
      <div>
        <p data-testid="question-category">{ question.category }</p>
        <p data-testid="question-text">{ question.question }</p>
        <div data-testid="answer-options">
          {this.shuffleAnswers().map((answer, index) => (
            <p
              data-testid={
                answer === question.correct_answer
                  ? 'correct-answer' : `wrong-answer-${index}`
              }
              key={ index }
            >
              {answer}
            </p>))}
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  question: propTypes.objectOf(propTypes.any),
}.isRequired;
