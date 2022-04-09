import React, { Component } from 'react';

class HouseType extends Component {
  render() {
    const { name, handleChange } = this.props;

    let errorMessage = '';
    if (name.length > 50) errorMessage = 'Limite excedido!';

    return (
      <div className="name-form">
        <label>
          <input
            type="radio"
            name="formHouseType"
            value="Casa"
            onChange={handleChange}
            required></input>
          Casa
        </label>
        <label>
          <input
            type="radio"
            name="formHouseType"
            value="Apartamento"
            onChange={handleChange}
            required></input>
          Apartamento
        </label>
        <span>{errorMessage}</span>
      </div>
    );
  }
}

export default HouseType;
