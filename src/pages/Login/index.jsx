import { connect } from 'node-mailjet';
import React from 'react';
// import { fetchToken, fetchQuestion } from '../../services/services';
// import { setToken } from '../../store/actions';

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
    // const { setToken } = this.props;
    // setToken();
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
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // setToken: () => { dispatch(setToken()); },
});

export default connect(null, mapDispatchToProps)(Login);
