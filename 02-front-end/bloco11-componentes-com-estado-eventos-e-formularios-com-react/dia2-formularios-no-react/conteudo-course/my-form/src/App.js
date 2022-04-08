import React, { Component } from 'react';
import './App.css';
import InputNumber from './components/InputNumber';
import TextArea from './components/TextArea';

class Form extends Component {
  constructor() {
    super();

    this.handleFormInputChange = this.handleFormInputChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: '',
      vaiComparecer: false,
      arquivo: '',
      formularioComErros: false,
    };
  }

  handleError() {
    const { estadoFavorito, idade } = this.state;

    const errorCases = [
      estadoFavorito.length > 40,
      idade > 99 || idade < 18 && idade !== '',
    ];

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  }

  handleFormInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.handleError();
      }
    );
  }

  render() {
    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="form">
          <TextArea
            estadoFavorito={this.state.estadoFavorito}
            handleChange={this.handleFormInputChange}
          />
          <br></br>
          <InputNumber
            age={this.state.idade}
            handleChange={this.handleFormInputChange}
          />
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
