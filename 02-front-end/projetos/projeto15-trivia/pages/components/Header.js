import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../styles/Header.css';

class Header extends Component {
  render() {
    const { playerState } = this.props;
    return (
      <header className="header-container">
        <img
          src={ `https://www.gravatar.com/avatar/${md5(playerState.gravatarEmail).toString()}` }
          alt="Player Avatar"
          width="200px"
          data-testid="header-profile-picture"
        />
        <h1
          data-testid="header-player-name"
          className="header-name"
        >
          { playerState.name }
        </h1>
        <span>Score: </span>
        <span
          data-testid="header-score"
          className="header-score"
        >
          {playerState.score}
        </span>
      </header>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  playerState: player,
});

Header.propTypes = {
  playerState: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps)(Header);
