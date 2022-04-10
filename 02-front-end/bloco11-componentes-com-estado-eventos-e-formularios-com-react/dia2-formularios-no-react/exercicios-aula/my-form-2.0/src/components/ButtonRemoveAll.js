import React, { Component } from 'react';

class ButtonRemoveAll extends Component {
  render() {
    const { handleAll } = this.props;

    return (
      <button type="button" onClick={handleAll}>
        Limpar tudo
      </button>
    );
  }
}

export default ButtonRemoveAll;
