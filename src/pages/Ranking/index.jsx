import md5 from 'crypto-js/md5';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRanking } from '../../helpers/localStorage';
import { action } from '../../store/actions';
import { SET_TOKEN } from '../../store/actions/types';
import * as S from './styles';

class Ranking extends Component {
  constructor() {
    super();
    this.state = {
      ranking: this.sortRanking(),
    };
  }

  sortRanking = () => getRanking().sort((a, b) => b.score - a.score);

  handleRedirectLogin = () => {
    const { history, resetToken } = this.props;
    resetToken();
    history.push('/');
  }

  render() {
    const { ranking } = this.state;
    return (
      <S.RankingContainer>
        <S.RankingTitle data-testid="ranking-title">Ranking</S.RankingTitle>
        <ul>
          { ranking.map((rank, index) => (
            <li key={ index }>
              <p data-testid={ `player-name-${index}` }>{rank.name}</p>
              <p data-testid={ `player-score-${index}` }>{rank.score}</p>
              <img alt="avatar" src={ `https://www.gravatar.com/avatar/${md5(rank.picture).toString()}` } />
            </li>
          ))}
        </ul>
        <button
          data-testid="btn-go-home"
          type="button"
          onClick={ this.handleRedirectLogin }
        >
          Voltar à tela inicial
        </button>
      </S.RankingContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  resetToken: () => dispatch(action(SET_TOKEN, '')),
});

Ranking.propTypes = {
  history: propTypes.shape({ push: propTypes.func }),
}.isRequired;

export default connect(null, mapDispatchToProps)(Ranking);
