import React, { Component } from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from './components/PlayAgainButton';
import { NEGATIVE_ONE } from './helpers/helpers';
import '../styles/Ranking.css';

class Ranking extends Component {
  constructor() {
    super();

    this.state = {
      wantToGoHome: false,
    };
  }

  handleFinish = () => {
    this.setState({
      wantToGoHome: true,
    });
  }

  render() {
    const { wantToGoHome } = this.state;
    const { playerState } = this.props;

    const storageRanking = JSON.parse(localStorage.getItem('ranking')) || [];
    storageRanking.sort((a, b) => (a.score - b.score < 0 ? 1 : NEGATIVE_ONE));
    const headerRanking = ['', 'Username', 'Total Score'];

    if (wantToGoHome) {
      return <Redirect to="/" />;
    }

    return (
      <main>
        <h1 data-testid="ranking-title">Ranking</h1>
        <table>
          <thead>
            <tr>
              { headerRanking.map((header, index) => (
                <th key={ index }>{ header }</th>
              )) }
            </tr>
          </thead>
          <tbody>
            { storageRanking.map((playerRanking, index) => (
              <tr key={ index }>
                <td>
                  <img
                    src={ `https://www.gravatar.com/avatar/${md5(playerState.gravatarEmail).toString()}` }
                    alt="Avatar do Jogador"
                  />
                </td>
                <td data-testid={ `player-name-${index}` }>{ playerRanking.name }</td>
                <td data-testid={ `player-score-${index}` }>{ playerRanking.score }</td>
              </tr>
            )) }
          </tbody>
        </table>
        <div className="play-again-container">
          <Button changeState={ this.handleFinish } dataTestId="btn-go-home" />
        </div>
      </main>
    );
  }
}

Ranking.propTypes = {
  playerState: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ player }) => ({
  playerState: player,
});

export default connect(mapStateToProps)(Ranking);
