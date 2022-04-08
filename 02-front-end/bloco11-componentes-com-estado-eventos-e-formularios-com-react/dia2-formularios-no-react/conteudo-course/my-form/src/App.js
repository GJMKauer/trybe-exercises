import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  constructor() {
    super();

    this.handleFormInputChange = this.handleFormInputChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
      arquivo: '',
    };
  }

  handleFormInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
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
            <fieldset>
              <legend>
                Diga qual o seu Estado favorito! De React ou do Brasil, você
                decide! =D
              </legend>
              <textarea
                name="estadoFavorito"
                value={this.state.estadoFavorito}
                onChange={this.handleFormInputChange}
              />
            </fieldset>
          </label>
          <br></br>
          <label>
            <fieldset>
              <legend>Qual é a sua idade?</legend>
              <input
                type="number"
                name="idade"
                onChange={this.handleFormInputChange}
              />
            </fieldset>
          </label>
          <br></br>
          <label>
            <fieldset>
              <legend>
                Marque a caixa abaixo se você vai comparecer à visita.
              </legend>
              <input
                type="checkbox"
                name="vaiComparecer"
                onChange={this.handleFormInputChange}
              />
            </fieldset>
          </label>
          <br></br>
          <label>
            <fieldset>
              <legend>Por favor, insira uma foto sua.</legend>
              <input
                type="file"
                name="arquivo"
                onChange={this.handleFormInputChange}
              />
            </fieldset>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
