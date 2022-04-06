import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import * as S from './styles';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      hash: '',
    };
  }

  componentDidMount() {
    const { email } = this.props;
    const gravatarEmail = md5(email).toString();
    this.setState(
      {
        hash: gravatarEmail,
      },
    );
  }

  render() {
    const { hash } = this.state;
    const { name, score } = this.props;
    return (
      <S.HeaderContainer>
        <S.AvatarImageContainer
          src={ `https://www.gravatar.com/avatar/${hash}` }
          data-testid="header-profile-picture"
          alt="avatar"
        />
        <S.AvatarInfosContainer>
          <span style={ { fontWeight: '600' } } data-testid="header-player-name">
            { name }
          </span>
          <span data-testid="header-score">
            Score: &nbsp;
            { score }
          </span>
        </S.AvatarInfosContainer>
      </S.HeaderContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.player.gravatarEmail,
  name: state.player.name,
  score: state.player.score,
});

Header.propTypes = {
  email: propTypes.string,
  name: propTypes.string,
  score: propTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Header);
