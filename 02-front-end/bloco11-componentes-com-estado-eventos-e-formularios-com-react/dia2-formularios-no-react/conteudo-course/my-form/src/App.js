import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
    };
  }

  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
            =)
            <br></br>
            <textarea
              name="estadoFavorito"
              value={this.state.estadoFavorito}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <input type="number" name="idade" />
          <br></br>
          <input type="checkbox" name="vaiComparecer" />
        </form>
      </div>
    );
  }
}

export default Form;
// Teste
