import { connect } from 'react-redux';
import React from 'react';
import propTypes from 'prop-types';
import { setToken } from '../../store/actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      isDisabled: true,
    };
  }

  validations = () => {
    const { name, email } = this.state;
    const regex = /^[\w-\\.]+@([\w-]+.)+[\w-]{2,4}$/g;
    const MIN_LENGTH = 3;

    this.setState({ isDisabled: !(regex.test(email) && name.length >= MIN_LENGTH) });
  }

  handleInputsChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.validations());
  }

  handleClick = () => {
    const { setTokenDispatch, history } = this.props;
    setTokenDispatch();
    history.push('/home');
  }

  handleRedirect = () => {
    const { history } = this.props;
    history.push('/settings');
  }

  render() {
    const { email, isDisabled, name } = this.state;
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
            name="email"
            value={ email }
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
  setTokenDispatch: () => { dispatch(setToken()); },
});

Login.propTypes = {
  setTokenDispatch: propTypes.func,
  history: propTypes.shape({ push: propTypes.func }),
}.isRequired;

export default connect(null, mapDispatchToProps)(Login);
