import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    const image = <img src={ cardImage } alt={ cardName } data-testid="image-card" />;

    return (
      <div>
        <div className="white-container">
          <div className="green-container">
            <div className="container-name">
              <span data-testid="name-card">{cardName}</span>
            </div>
            <div className="container-image">
              {cardImage && image}
            </div>
            <div className="container-description">
              <span
                data-testid="description-card"
                className="textarea-text"
              >
                {cardDescription}
              </span>
            </div>
            <div className="container-attr1">
              <span className="card-attr-name">Attack:</span>
              <span data-testid="attr1-card" className="card-attr">{cardAttr1}</span>
            </div>
            <div className="container-attr2">
              <span className="card-attr-name">Defense:</span>
              <span data-testid="attr2-card" className="card-attr">{cardAttr2}</span>
            </div>
            <div className="container-attr3">
              <span className="card-attr-name">Card N°:</span>
              <span data-testid="attr3-card" className="card-attr">{cardAttr3}</span>
            </div>
            <div>
              {/* {cardRare !== 'Selecione a raridade' && <span data-testid="rare-card">{cardRare}</span>} */}
              <span data-testid="rare-card" className="card-rare">{cardRare}</span>
            </div>
            <div>
              {cardTrunfo
              && <span data-testid="trunfo-card" className="card-tr">Super Trunfo</span>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
