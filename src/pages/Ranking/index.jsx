import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { SET_TOKEN } from '../../store/actions/types';
import { action } from '../../store/actions';

class Ranking extends Component {
  handleRedirectLogin = () => {
    const { history, resetToken } = this.props;
    resetToken();
    history.push('/');
  }

  render() {
    return (
      <div>
        <h1 data-testid="ranking-title">Ranking</h1>
        <button
          data-testid="btn-go-home"
          type="button"
          onClick={ this.handleRedirectLogin }
        >
          Voltar à tela inicial
        </button>
      </div>
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
