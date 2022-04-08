import React, { Component } from 'react';

class InputNumber extends Component {
  render() {
    const { age, handleChange } = this.props;

    let errorMessage = '';
    if (age > 99 || age < 18) {
      errorMessage =
        'Sua idade não está dentro da faixa elegível para responder a este questionário.';
    }
    if (age <= 0) {
      errorMessage = 'Valor inválido.';
    }
    if (age === '') errorMessage = '';

    return (
      <div>
        <label>
          <fieldset>
            <legend>Qual é a sua idade?</legend>
            <input
              type="number"
              name="idade"
              value={age}
              onChange={handleChange}
            />
          </fieldset>
        </label>
        <span>{errorMessage}</span>
      </div>
    );
  }
}

export default InputNumber;
