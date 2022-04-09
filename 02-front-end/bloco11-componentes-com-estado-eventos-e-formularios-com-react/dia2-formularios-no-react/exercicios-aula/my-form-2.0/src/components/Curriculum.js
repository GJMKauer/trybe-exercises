import React, { Component } from 'react';

class Curriculum extends Component {
  render() {
    const { name, handleChange } = this.props;

    let errorMessage = '';
    if (name.length > 1000) errorMessage = 'Limite de caracteres excedido!';

    return (
      <div className="name-form">
        <label>
          Resumo do seu currículo:
          <textarea
            type="text"
            placeholder="Resumo do seu currículo. Limite de caracteres: 1000."
            name="formCurriculum"
            rows="8"
            value={name}
            onChange={handleChange}
            required></textarea>
        </label>
        <span className="span-error">{errorMessage}</span>
      </div>
    );
  }
}

export default Curriculum;
