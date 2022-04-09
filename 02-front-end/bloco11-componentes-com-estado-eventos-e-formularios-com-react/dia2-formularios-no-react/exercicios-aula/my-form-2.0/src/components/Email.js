import React, { Component } from 'react';

class Email extends Component {
  render() {
    const { name, handleChange } = this.props;

    let errorMessage = '';
    if (name.length > 50) errorMessage = 'Limite de caracteres excedido!';

    return (
      <div className="name-form">
        <label>
          Seu email:
          <input
            type="text"
            placeholder="Email"
            name="formEmail"
            value={name}
            onChange={handleChange}
            required></input>
        </label>
        <span>{errorMessage}</span>
      </div>
    );
  }
}

export default Email;
