import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { action, setToken } from '../../store/actions';
import { SET_USER } from '../../store/actions/types';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gravatarEmail: '',
      isDisabled: true,
    };
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
      <div>
        <h2>Login</h2>
        <form>
          <input
            data-testid="input-player-name"
            onChange={ this.handleInputsChange }
            name="name"
            value={ name }
            type="text"
          />
          <input
            data-testid="input-gravatar-email"
            onChange={ this.handleInputsChange }
            name="gravatarEmail"
            value={ gravatarEmail }
            type="email"
          />
          <button
            data-testid="btn-play"
            disabled={ isDisabled }
            type="button"
            onClick={ this.handleClick }
          >
            Play

          </button>
          <button
            data-testid="btn-settings"
            type="button"
            onClick={ this.handleRedirect }
          >
            Configurações

          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTokenDispatch: (callback) => { dispatch(setToken(callback)); },
  setUser: (user) => { dispatch(action(SET_USER, user)); },
});

const mapStateToProps = (state) => ({ token: state.token });

Login.propTypes = {
  setTokenDispatch: propTypes.func,
  history: propTypes.shape({ push: propTypes.func }),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
