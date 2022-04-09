import React, { Component } from 'react';

class Name extends Component {
  render() {
    const { name, handleChange } = this.props;

    let errorMessage = '';
    if (name.length > 40) errorMessage = 'Limite de caracteres excedido!'

    return (
      <div className="name-form">
        <label>
          Seu nome:
          <input
          type="text"
          placeholder="Nome"
          name="formName"
          value={name.toUpperCase()}
          onChange={handleChange}
          required></input>
        </label>
        <span>{errorMessage}</span>
      </div>
    );
  }
}

export default Name;
