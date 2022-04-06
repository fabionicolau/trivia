import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Question extends Component {
  render() {
    const { question } = this.props;

    return (
      <div>
        <span data-testid="question-category">{ question.category }</span>
      </div>
    );
  }
}

Question.propTypes = {
  question: propTypes.objectOf(propTypes.any),
}.isRequired;
