import React, { Component } from 'react';

class City extends Component {
  render() {
    const { name, handleChange, handleBlur } = this.props;

    let errorMessage = '';
    if (name.length > 28) errorMessage = 'Limite de caracteres excedido!';

    return (
      <div className="name-form">
        <label>
          Sua cidade:
          <input
            type="text"
            placeholder="Cidade"
            name="formCity"
            value={name}
            onChange={handleChange}
            onBlur={handleBlur}
            required></input>
        </label>
        <span>{errorMessage}</span>
      </div>
    );
  }
}

export default City;
