import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1() {
    console.log('Botão 1: Oie, você clicou em mim. >.<');
  }

  handleClick2() {
    console.log('Botão 2: Cuidado comigo! Sou muito frágil rs.');
  }

  handleClick3() {
    console.log('Botão 3: Yamette kudasai, onii-chan');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>Meu botão 1</button>
        <button onClick={this.handleClick2}>Meu botão 2</button>
        <button onClick={this.handleClick3}>Meu botão 3</button>
        <p>Clique em cada botão para visualizar uma mensagem diferente.</p>
      </div>
    );
  }
}

export default App;
