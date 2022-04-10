import React, { Component } from 'react';

class TextArea extends Component {
  render() {
    const { handleChange, estadoFavorito } = this.props;

    let errorMessage = '';
    if (estadoFavorito.length > 40) errorMessage = 'Seu texto está muito longo. Não será aceito.';
    if (estadoFavorito === 'Konami Code') errorMessage = 'Você descobriu o código secreto.';

    return (
      <div>
        <label>
          <fieldset>
            <legend>
              Diga qual o seu Estado favorito! De React ou do Brasil, você
              decide! =D
            </legend>
            <textarea
              name="estadoFavorito"
              value={estadoFavorito}
              onChange={handleChange}
            />
          </fieldset>
        </label>
        <span>{errorMessage}</span>
      </div>
    );
  }
}

export default TextArea;
