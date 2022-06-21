import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from './components/PlayAgainButton';
import Header from './components/Header';
import { THREE } from './helpers/helpers';
import {
  gameConfigurationAction }
from '../redux/actions/configurations';
import '../styles/Feedback.css';

class Feedback extends Component {
  constructor() {
    super();

    this.state = {
      finishedGame: false,
      wantToGoToRanking: false,
    };
  }

  handleFinish = () => {
    this.setState({
      finishedGame: true,
    });

    const { getConfigs } = this.props;
    getConfigs('', '', '');
  }

  handleRanking = () => {
    this.setState({
      wantToGoToRanking: true,
    });
  }

  render() {
    const { assertionsState } = this.props;
    const { finishedGame, wantToGoToRanking } = this.state;
    if (finishedGame) {
      return <Redirect to="/" />;
    }
    if (wantToGoToRanking) {
      return <Redirect to="/ranking" />;
    }

    return (
      <div>
        <Header />
        <section className="feedback-header-container">
          { assertionsState.assertions >= THREE
            ? <h1 data-testid="feedback-text">Well Done!</h1>
            : <h1 data-testid="feedback-text">Could be better...</h1> }
          <section>
            <span>Score: </span>
            <span data-testid="feedback-total-score">{ assertionsState.score }</span>
          </section>
          <section>
            <span>Assertions: </span>
            <span data-testid="feedback-total-question">
              { assertionsState.assertions }
            </span>
          </section>
        </section>
        <section className="play-again-container">
          <Button changeState={ this.handleFinish } dataTestId="btn-play-again" />
          <button
            type="button"
            data-testid="btn-ranking"
            onClick={ this.handleRanking }
          >
            Ranking
          </button>
        </section>
      </div>
    );
  }
}

Feedback.propTypes = {
  assertionsState: PropTypes.objectOf(PropTypes.any).isRequired,
  getConfigs: PropTypes.func.isRequired,
};

const mapStateToProps = ({ player }) => ({
  assertionsState: player,
});

const mapDispatchToProps = (dispatch) => ({
  getConfigs: (category, difficulty, type) => {
    dispatch(gameConfigurationAction(category, difficulty, type));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
