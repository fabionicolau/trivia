import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import { action } from '../../store/actions';
import { SET_TOKEN } from '../../store/actions/types';

class Feedback extends React.Component {
  changeMessage =() => {
    const { assertions } = this.props;
    const THREE = 3;
    return assertions < THREE ? 'Could be better...' : 'Well Done!';
  }

  playAgain = () => {
    const { history: { push } } = this.props;
    const { resetToken } = this.props;
    resetToken();
    push('/');
  }

  render() {
    const { score, assertions } = this.props;

    return (
      <>
        <Header />
        <h1 data-testid="feedback-text">{this.changeMessage()}</h1>
        <p data-testid="feedback-total-score">{score}</p>
        <p data-testid="feedback-total-question">{assertions}</p>
        <button
          data-testid="btn-play-again"
          type="button"
          onClick={ this.playAgain }
        >
          Play Again
        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

const mapDispatchToProps = (dispatch) => ({
  resetToken: () => dispatch(action(SET_TOKEN, '')),
});

Feedback.propTypes = {
  assertions: propTypes.number,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
