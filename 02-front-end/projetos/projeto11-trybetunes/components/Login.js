import React, { Component } from 'react';
import propTypes from 'prop-types';

class Login extends Component {
  render() {
    const { disable, createUserFunc, validateButton } = this.props;

    return (
      <div data-testid="page-login">
        <label htmlFor="login-name-input">
          Insira seu nome
          <input
            id="login-name-input"
            type="text"
            data-testid="login-name-input"
            onChange={ validateButton }
          />
        </label>
        <button
          id="login-submit-button"
          type="button"
          data-testid="login-submit-button"
          disabled={ disable }
          onClick={ createUserFunc }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  disable: propTypes.bool.isRequired,
  createUserFunc: propTypes.func.isRequired,
  validateButton: propTypes.func.isRequired,
};

export default Login;
