import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Deck extends Component {
  render() {
    const { deck, handleDelete } = this.props;

    return (
      <div className="deck-container">
        <div>
          <span className="span-name">FILTRO:</span>
          <input type="text" className="input-filter" />
        </div>
        <div>
          <span className="span-name">BARALHO</span>
          <div className="cards-container">
            {deck.map((element, index) => (
              <div key={ index } className="card-button-container">
                <div className="card-container">
                  {element}
                </div>
                <div className="button-container">
                  <button
                    type="button"
                    id={ index }
                    className="delete-button"
                    data-testid="delete-button"
                    onClick={ handleDelete }
                  >
                    Excluir carta
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Deck.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.shape).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Deck;
