import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import CountDown from '../../components/CountDown';
import Header from '../../components/Header';
import Question from '../../components/Question';
import { fetchQuestion } from '../../services/services';
import { action } from '../../store/actions';
import { IS_SELECTED_ANSWER, RESET_TIMER } from '../../store/actions/types';

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

  handleClickNext = () => {
    const { setIsSelectedAnswer, resetTimer } = this.props;
    setIsSelectedAnswer(false);
    this.setState((prev) => ({
      questionIndex: prev.questionIndex + 1,
    }), resetTimer);
  }

  render() {
    const { questions, questionIndex } = this.state;
    const { isSelectedAnswer } = this.props;

    if (questionIndex >= QUESTION_AMOUNT) return <Redirect to="/feedback" />;
    return (
      <div>
        <Header />
        {questions.length > 0 && (
          <Question index={ questionIndex } question={ questions[questionIndex] } />
        )}
        <CountDown />
        {isSelectedAnswer
        && (
          <button
            data-testid="btn-next"
            type="button"
            onClick={ this.handleClickNext }
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

const mapDispatchToProps = (dispatch) => ({
  setIsSelectedAnswer: (isSelected) => dispatch(action(IS_SELECTED_ANSWER, isSelected)),
  resetTimer: () => dispatch(action(RESET_TIMER)),
});

Home.propTypes = {
  token: propTypes.string,
  isSelectedAnswer: propTypes.bool,
  setIsSelectedAnswer: propTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
