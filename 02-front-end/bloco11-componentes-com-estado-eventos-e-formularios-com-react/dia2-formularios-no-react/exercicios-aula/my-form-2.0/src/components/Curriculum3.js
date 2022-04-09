import React, { Component } from 'react';

class Curriculum3 extends Component {
  render() {
    const { name, handleChange } = this.props;

    let errorMessage = '';
    if (name.length > 500) errorMessage = 'Limite de caracteres excedido!';

    return (
      <div className="name-form">
        <label>
          Descrição do cargo:
          <textarea
            type="text"
            placeholder="Resumo do seu cargo. Limite de caracteres: 400."
            name="formCurriculum3"
            rows="4"
            value={name}
            onChange={handleChange}
            required></textarea>
        </label>
        <span className="span-error">{errorMessage}</span>
      </div>
    );
  }
}

export default Curriculum3;
