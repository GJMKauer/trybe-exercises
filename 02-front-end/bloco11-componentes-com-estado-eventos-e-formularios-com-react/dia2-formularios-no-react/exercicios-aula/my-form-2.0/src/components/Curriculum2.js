import React, { Component } from 'react';

class Curriculum2 extends Component {
  render() {
    const { name, handleChange, handleMouse } = this.props;

    let errorMessage = '';
    if (name.length > 40) errorMessage = 'Limite de caracteres excedido!';

    return (
      <div className="name-form">
        <label>
          Seu cargo atual:
          <textarea
            type="text"
            placeholder="Cargo atual. Limite de caracteres: 40."
            name="formCurriculum2"
            value={name}
            onChange={handleChange}
            onMouseEnter={handleMouse}
            required></textarea>
        </label>
        <span className="span-error">{errorMessage}</span>
      </div>
    );
  }
}

export default Curriculum2;
