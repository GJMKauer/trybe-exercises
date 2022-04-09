import React, { Component } from 'react';

class Address extends Component {
  render() {
    const { name, handleChange } = this.props;

    let errorMessage = '';
    if (name.length > 200) errorMessage = 'Limite de caracteres excedido!';

    return (
      <div className="name-form">
        <label>
          Seu endereço:
          <input
            type="text"
            placeholder="Endereço"
            name="formAddress"
            value={name.replace(
              /[&#+()$~%.'":*?<>{}!_=@|;¹²³£¢¬§´ª~º°·─µn”“©»«ºæßðđŋħłø→↓←ŧ®°þNµ×&̛ĦŊŁ&ŊªÐ§Æ?°®Ŧ¥↑ıØ°±™⅞⅜¼¾½¡^‘’÷¿˘Þ¯˙`[\\\]\\]/g,
              ''
            )}
            onChange={handleChange}
            required></input>
        </label>
        <span>{errorMessage}</span>
      </div>
    );
  }
}

export default Address;
