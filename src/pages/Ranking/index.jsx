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
        <S.RankingTopSide>
          <S.RankingTitle data-testid="ranking-title">Ranking</S.RankingTitle>
          <S.RankingButton
            data-testid="btn-go-home"
            type="button"
            onClick={ this.handleRedirectLogin }
          >
            Voltar à tela inicial
          </S.RankingButton>
        </S.RankingTopSide>

        <S.RankingUsersInfos>
          { ranking.map((rank, index) => (
            <S.RankingUser key={ index }>
              <S.RankingUserImage
                alt="avatar"
                src={ `https://www.gravatar.com/avatar/${md5(rank.picture).toString()}` }
              />
              <S.RankingUsersDetails>
                <S.RankingNameSide>
                  User:
                  {' '}
                  <S.RankingUserName data-testid={ `player-name-${index}` }>
                    {rank.name}
                  </S.RankingUserName>
                </S.RankingNameSide>
                <S.RankingScoreSide>
                  Score:
                  {' '}
                  <S.RankingScore data-testid={ `player-score-${index}` }>
                    {rank.score}
                  </S.RankingScore>
                </S.RankingScoreSide>
              </S.RankingUsersDetails>
            </S.RankingUser>
          ))}
        </S.RankingUsersInfos>
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
