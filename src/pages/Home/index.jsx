import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountDown from '../../components/CountDown';

import Header from '../../components/Header';
import Question from '../../components/Question';
import { fetchQuestion } from '../../services/services';

const QUESTION_AMOUNT = 5;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      questionIndex: 0,
    };
  }

  componentDidMount() {
    const { token } = this.props;
    fetchQuestion(QUESTION_AMOUNT, token).then((res) => {
      const { results } = res;
      this.setState({ questions: results });
    });
  }

  render() {
    const { questions, questionIndex } = this.state;
    const { isSelectedAnswer } = this.props;
    return (
      <div>
        <Header />
        {questions.length > 0 && (
          <Question question={ questions[questionIndex] } />
        )}
        <CountDown />
        {isSelectedAnswer
        && (
          <button
            data-testid="btn-next"
            type="button"
          // onClick={}
          >
            Next

          </button>
        )}

      </div>);
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
  isSelectedAnswer: state.game.isSelectedAnswer,
});

Home.propTypes = {
  token: propTypes.string.isRequired,
  isSelectedAnswer: propTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(Home);
