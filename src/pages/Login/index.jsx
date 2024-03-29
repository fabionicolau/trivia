import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { action, setToken } from '../../store/actions';
import { RESET_PLAYER, SET_TOKEN, SET_USER } from '../../store/actions/types';
import * as S from './styles';
import image from '../../image/drac.png';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gravatarEmail: '',
      isDisabled: true,
    };
  }

  componentDidMount() {
    const { resetPlayer } = this.props;
    resetPlayer();
  }

  validations = () => {
    const { name, gravatarEmail } = this.state;
    const regex = /^[\w-\\.]+@([\w-]+.)+[\w-]{2,4}$/g;
    const MIN_LENGTH = 3;

    this.setState({ isDisabled: !(regex.test(gravatarEmail)
      && name.length >= MIN_LENGTH) });
  }

  handleInputsChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.validations());
  }

  handleClick = () => {
    const { setTokenDispatch, setUser } = this.props;
    setTokenDispatch();
    const { name, gravatarEmail } = this.state;
    setUser({ name, gravatarEmail });
  }

  handleRedirect = () => {
    const { history } = this.props;
    history.push('/settings');
  }

  render() {
    const { gravatarEmail, isDisabled, name } = this.state;

    const { token } = this.props;

    if (token) return <Redirect to="/home" />;

    return (
      <S.LoginContainer>
        <S.BoxContainer>
          <img src={ image } alt="Minha Figura" />
          <h2>DracQuestions</h2>
          <S.LoginForm>
            <S.InputContainer>
              <S.Label htmlFor="name">
                {' '}
                Name:
              </S.Label>
              <S.Input
                data-testid="input-player-name"
                onChange={ this.handleInputsChange }
                name="name"
                value={ name }
                type="text"
              />
              <S.Label htmlFor="gravatarEmail">
                Email:
              </S.Label>
              <S.Input
                data-testid="input-gravatar-email"
                onChange={ this.handleInputsChange }
                name="gravatarEmail"
                value={ gravatarEmail }
                type="email"
              />
            </S.InputContainer>
            <S.ButtonsContainer>
              <S.LoginButton
                data-testid="btn-play"
                disabled={ isDisabled }
                type="button"
                onClick={ this.handleClick }
              >
                Play
              </S.LoginButton>
              <S.LoginButton
                data-testid="btn-settings"
                type="button"
                onClick={ this.handleRedirect }
              >
                Configurações

              </S.LoginButton>
            </S.ButtonsContainer>
          </S.LoginForm>
        </S.BoxContainer>
      </S.LoginContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTokenDispatch: (callback) => { dispatch(setToken(callback)); },
  setUser: (user) => { dispatch(action(SET_USER, user)); },
  resetToken: () => dispatch(action(SET_TOKEN, '')),
  resetPlayer: () => dispatch(action(RESET_PLAYER)),
});

const mapStateToProps = (state) => ({ token: state.token });

Login.propTypes = {
  setTokenDispatch: propTypes.func,
  history: propTypes.shape({ push: propTypes.func }),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
