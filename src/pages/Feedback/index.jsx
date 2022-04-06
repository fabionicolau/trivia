import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import { action } from '../../store/actions';
import { SET_TOKEN } from '../../store/actions/types';
import { saveRaking } from '../../helpers/localStorage';

class Feedback extends React.Component {
  componentDidMount() {
    const { player: { name, score, gravatarEmail } } = this.props;
    saveRaking({ name, score, picture: gravatarEmail });
  }

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

  ranking = () => {
    const { history: { push } } = this.props;
    push('/ranking');
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
        <button
          onClick={ this.ranking }
          type="button"
          data-testid="btn-ranking"
        >
          Ranking

        </button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
  player: state.player,
});

const mapDispatchToProps = (dispatch) => ({
  resetToken: () => dispatch(action(SET_TOKEN, '')),
});

Feedback.propTypes = {
  assertions: propTypes.number,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
