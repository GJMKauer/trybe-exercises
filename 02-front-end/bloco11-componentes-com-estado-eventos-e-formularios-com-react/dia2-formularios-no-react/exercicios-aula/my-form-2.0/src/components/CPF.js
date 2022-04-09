import React, { Component } from 'react';

class CPF extends Component {
  render() {
    const { name, handleChange } = this.props;

    let errorMessage = '';
    if (name.length > 11) {
      errorMessage = 'Limite de caracteres excedido!';
    }

    return (
      <div className="name-form">
        <label>
          Seu CPF:
          <input
            type="text"
            placeholder="CPF"
            maxLength="14"
            name="formCPF"
            value={name.replace(/[a-zA-Z]/g, '')}
            onChange={handleChange}
            required></input>
        </label>
        <span>{errorMessage}</span>
      </div>
    );
  }
}

export default CPF;
