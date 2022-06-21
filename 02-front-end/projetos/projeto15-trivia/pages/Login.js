import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userTokenThunk } from '../redux/actions/login';
import { player, getAssertions, getScore } from '../redux/actions/player';
import {
  configuredQuestionsThunk }
from '../redux/actions/configurations';
import { questionsThunk } from '../redux/actions/questions';
import logo from '../trivia.png';
import '../styles/App.css';
import '../styles/Login.css';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      inputName: '',
      inputEmail: '',
    };
  }

  componentDidMount() {
    const { assertionsDispatch, scoreDispatch } = this.props;
    const score = 0;
    const assertions = 0;
    assertionsDispatch(assertions);
    scoreDispatch(score);
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  playGame = async () => {
    const {
      dispatchTokenAPI,
      dispatchPlayerInfo,
      questionsDispatch,
      history,
    } = this.props;
    await dispatchTokenAPI();

    const { tokenState } = this.props;
    localStorage.setItem('token', tokenState);

    const { inputName, inputEmail } = this.state;
    dispatchPlayerInfo(inputName, inputEmail);

    questionsDispatch();
    history.push('/game');
  }

  playConfiguredGame = () => {
    const { configState, history, configureThunk } = this.props;
    const { category, difficulty, type } = configState;

    configureThunk(category, difficulty, type);
    history.push('/game');
  }

  render() {
    const { inputName, inputEmail } = this.state;
    const { history, configState } = this.props;
    const mailValidator = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

    return (
      <main className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <section className="login-page-container">
          <section className="login-information-container">
            <label htmlFor="input-name-login" className="name-label">
              Name
              <input
                type="text"
                name="inputName"
                value={ inputName }
                id="input-name-login"
                data-testid="input-player-name"
                onChange={ this.handleChange }
                placeholder="Insert your username"
              />
            </label>
            <label htmlFor="input-email-login" className="email-label">
              E-mail
              <input
                type="email"
                name="inputEmail"
                value={ inputEmail }
                id="input-email-login"
                onChange={ this.handleChange }
                data-testid="input-gravatar-email"
                placeholder="Insert your e-mail"
              />
            </label>
          </section>
          <section className="buttons-container">
            <button
              type="button"
              data-testid="btn-play"
              disabled={
                inputName.length === 0
              || inputEmail.length === 0
              || !mailValidator.test(inputEmail)
              }
              onClick={
                configState.category !== ''
                || configState.difficulty !== ''
                || configState.type !== ''
                  ? this.playConfiguredGame : this.playGame
              }
            >
              Play
            </button>
            <button
              type="button"
              data-testid="btn-settings"
              onClick={ () => {
                const { tokenState, dispatchPlayerInfo } = this.props;
                localStorage.setItem('token', tokenState);
                dispatchPlayerInfo(inputName, inputEmail);

                history.push('/config');
              } }
            >
              Configurations
            </button>
          </section>
        </section>
      </main>
    );
  }
}

const mapStateToProps = ({ tokenReducer, configurationReducer }) => ({
  tokenState: tokenReducer.token,
  configState: configurationReducer.configuration,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchTokenAPI: () => dispatch(userTokenThunk()),
  dispatchPlayerInfo: (name, email) => dispatch(player(name, email)),
  assertionsDispatch: (assertion) => dispatch(getAssertions(assertion)),
  scoreDispatch: (scoreValue) => dispatch(getScore(scoreValue)),
  questionsDispatch: () => dispatch(questionsThunk()),
  configureThunk: (category, difficulty, type) => {
    dispatch(configuredQuestionsThunk(category, difficulty, type));
  },
});

Login.propTypes = {
  dispatchTokenAPI: PropTypes.func.isRequired,
  tokenState: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
  dispatchPlayerInfo: PropTypes.func.isRequired,
  assertionsDispatch: PropTypes.func.isRequired,
  scoreDispatch: PropTypes.func.isRequired,
  questionsDispatch: PropTypes.func.isRequired,
  configState: PropTypes.objectOf(PropTypes.any).isRequired,
  configureThunk: PropTypes.func.isRequired,
};

Login.defaultProps = {
  history: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
