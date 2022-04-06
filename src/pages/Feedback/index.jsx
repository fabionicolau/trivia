import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import { saveRaking } from '../../helpers/localStorage';
import { action } from '../../store/actions';
import { SET_TOKEN } from '../../store/actions/types';
import * as S from './styles';

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
      <S.Body>
        <Header />
        <S.FeedbackContainer>
          <h1 data-testid="feedback-text">{this.changeMessage()}</h1>
          <p data-testid="feedback-total-score">
            Score:
            {' '}
            {score}
          </p>
          <p data-testid="feedback-total-question">
            Assertions:
            {' '}
            {assertions}
          </p>
          <S.ButtonsContainer>
            <S.Button
              data-testid="btn-play-again"
              type="button"
              onClick={ this.playAgain }
            >
              Play Again
            </S.Button>
            <S.Button
              onClick={ this.ranking }
              type="button"
              data-testid="btn-ranking"
            >
              Ranking

            </S.Button>
          </S.ButtonsContainer>
        </S.FeedbackContainer>
      </S.Body>);
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
