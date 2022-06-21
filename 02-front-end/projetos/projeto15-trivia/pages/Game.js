import React, { Component } from 'react';
import Header from './components/Header';
import TriviaCard from './components/TriviaCard';

class Game extends Component {
  render() {
    return (
      <span>
        <Header />
        <TriviaCard />
      </span>
    );
  }
}

export default Game;
