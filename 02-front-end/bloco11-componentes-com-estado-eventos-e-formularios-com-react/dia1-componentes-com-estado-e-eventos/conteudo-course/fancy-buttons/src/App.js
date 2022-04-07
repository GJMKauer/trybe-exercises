import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clickNumber1: 0,
      clickNumber2: 0,
      clickNumber3: 0,
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1() {
    console.log('Botão 1: Oie, você clicou em mim. >.<');
    this.setState((oldState, _props) => ({
      clickNumber1: oldState.clickNumber1 + 1,
    }));
  }

  handleClick2() {
    console.log('Botão 2: Cuidado comigo! Sou muito frágil rs.');
    this.setState((oldState, _props) => ({
      clickNumber2: oldState.clickNumber2 + 1,
    }));
  }

  handleClick3() {
    console.log('Botão 3: Yamette kudasai, onii-chan');
    this.setState((oldState, _props) => ({
      clickNumber3: oldState.clickNumber3 + 1,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>{this.state.clickNumber1}</button>
        <button onClick={this.handleClick2}>{this.state.clickNumber2}</button>
        <button onClick={this.handleClick3}>{this.state.clickNumber3}</button>
        <p>Clique em cada botão para visualizar uma mensagem diferente.</p>
      </div>
    );
  }
}

export default App;
