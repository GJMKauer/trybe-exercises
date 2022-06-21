import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  gameConfigurationAction }
from '../redux/actions/configurations';
import { questionCategories, questionDifficulty, questionType } from './helpers/helpers';
import '../styles/Configuration.css';

class Configuration extends Component {
  getCategory = ({ target }) => {
    const { configuration, getConfigs } = this.props;
    getConfigs(target.value, configuration.difficulty, configuration.type);
  }

  getDifficulty = ({ target }) => {
    const { configuration, getConfigs } = this.props;
    getConfigs(configuration.category, target.value, configuration.type);
  }

  getType = ({ target }) => {
    const { configuration, getConfigs } = this.props;
    getConfigs(configuration.category, configuration.difficulty, target.value);
  }

  finishConfiguration = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    return (
      <main>
        <h1
          data-testid="settings-title"
          className="settings-title"
        >
          Game Configurations
        </h1>
        <section className="configuration-container">
          <label htmlFor="select-category" className="labels">
            Choose questions category
            <select
              id="select-category"
              onClick={ this.getCategory }
            >
              { questionCategories.map((question, index) => (
                <option
                  key={ index }
                  value={ question.value }
                >
                  { question.name }
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="select-difficulty" className="labels">
            Choose questions difficulty
            <select
              id="select-difficulty"
              onClick={ this.getDifficulty }
            >
              { questionDifficulty.map((difficulty, index) => (
                <option
                  key={ index }
                  value={ difficulty.value }
                >
                  { difficulty.name }
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="select-type" className="labels">
            Choose questions type
            <select
              id="select-type"
              onClick={ this.getType }
            >
              { questionType.map((type, index) => (
                <option
                  key={ index }
                  value={ type.value }
                >
                  { type.name }
                </option>
              ))}
            </select>
          </label>
        </section>
        <button
          type="button"
          onClick={ this.finishConfiguration }
          className="play-button"
        >
          Finish Configuration
        </button>
      </main>
    );
  }
}

const mapStateToProps = ({ configurationReducer }) => ({
  configuration: configurationReducer.configuration,
});

const mapDispatchToProps = (dispatch) => ({
  getConfigs: (category, difficulty, type) => {
    dispatch(gameConfigurationAction(category, difficulty, type));
  },
});

Configuration.propTypes = ({
  configuration: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  getConfigs: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, mapDispatchToProps)(Configuration);
