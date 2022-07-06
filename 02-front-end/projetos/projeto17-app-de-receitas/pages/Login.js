import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { SIX, verifyEmail } from './helpers/index';
import { changeEmail, changePassword } from '../redux/slices/login';

function Login() {
  const userLogin = useSelector(({ login }) => (login));
  const dispatch = useDispatch();

  const handleInput = ({ target: { name, value } }) => (
    name === 'email'
      ? dispatch(changeEmail(value))
      : dispatch(changePassword(value))
  );

  const handleLogin = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify({ email: userLogin.email }));
  };

  return (
    <div>
      <form>
        <label htmlFor="email-input">
          E-mail
          <input
            type="text"
            data-testid="email-input"
            id="email-input"
            name="email"
            placeholder="Email"
            value={ userLogin.email }
            onChange={ handleInput }
          />
        </label>
        <label htmlFor="password-input">
          Password
          <input
            type="password"
            data-testid="password-input"
            id="password-input"
            name="password"
            placeholder="Password"
            value={ userLogin.password }
            onChange={ handleInput }
          />
        </label>
        <Link to="/foods">
          <button
            type="button"
            data-testid="login-submit-btn"
            disabled={ userLogin.password.length <= SIX
              || !verifyEmail.test(userLogin.email) }
            onClick={ handleLogin }
          >
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
