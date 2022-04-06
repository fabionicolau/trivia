import { connect } from 'react-redux';
import React from 'react';
import propTypes from 'prop-types';
import { action, setToken } from '../../store/actions';
import { SET_QUESTIONS, SET_USER } from '../../store/actions/types';
import { fetchQuestion } from '../../services/services';

const QUESTION_AMOUNT = 5;

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
    const { token, setQuestions } = this.props;
    fetchQuestion(QUESTION_AMOUNT, token).then((res) => {
      const { results } = res;
      setQuestions(results);
    });
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
    const { setTokenDispatch, history, setUser } = this.props;

    setTokenDispatch();
    const { name, gravatarEmail } = this.state;
    setUser({ name, gravatarEmail });
    history.push('/home');
  }

  handleRedirect = () => {
    const { history } = this.props;
    history.push('/settings');
  }

  render() {
    const { gravatarEmail, isDisabled, name } = this.state;
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
  setTokenDispatch: () => { dispatch(setToken()); },
  setUser: (user) => { dispatch(action(SET_USER, user)); },
  setQuestions: (questions) => { dispatch(action(SET_QUESTIONS, questions)); },
});

const mapStateToProps = (state) => ({
  token: state.token,
});

Login.propTypes = {
  setTokenDispatch: propTypes.func,
  history: propTypes.shape({ push: propTypes.func }),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
