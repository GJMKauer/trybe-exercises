import React, { Component } from 'react';

class ButtonDiv extends Component {
  render() {
    const { handleDiv, handleMouse } = this.props;

    return (
      <button type="button" onClick={handleDiv} onMouseUp={handleMouse}>
        Enviar dados
      </button>
    );
  }
}

export default ButtonDiv;
