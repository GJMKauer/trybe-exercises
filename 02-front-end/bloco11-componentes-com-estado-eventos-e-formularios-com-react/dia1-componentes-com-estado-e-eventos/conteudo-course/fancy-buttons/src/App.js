import React, { Component } from 'react';
import './App.css';

const handleClick1 = () => {
  console.log('Botão 1: Oie, você clicou em mim. >.<');
};

const handleClick2 = () => {
  console.log('Botão 2: Cuidado comigo! Sou muito frágil rs.');
};

const handleClick3 = () => {
  console.log('Botão 3: Yamette kudasai, onii-chan');
};

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={handleClick1}>Meu botão 1</button>
        <button onClick={handleClick2}>Meu botão 2</button>
        <button onClick={handleClick3}>Meu botão 3</button>
        <p>Clique em cada botão para visualizar uma mensagem diferente.</p>
      </div>
    );
  }
}

export default App;
