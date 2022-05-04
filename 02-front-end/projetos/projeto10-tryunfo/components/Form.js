import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      hasTrunfo,
      handleSpan,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const newTrunfo = (
      <label htmlFor="trunfo" className="trunfo-label">
        <input
          id="trunfo"
          name="cardTrunfo"
          type="checkbox"
          value={ hasTrunfo } // só pra rodar no lint, não sei se vai ficar aqui
          checked={ cardTrunfo }
          onChange={ onInputChange }
          className="input-checkbox"
          data-testid="trunfo-input"
        />
        Ritual Card
      </label>
    );

    const alreadyHasTrunfo = <span>Você já tem um Super Trunfo em seu baralho</span>;

    return (
      <form>
        <fieldset>
          <div>
            <label htmlFor="nome">
              Card name:
              <input
                id="nome"
                name="cardName"
                type="text"
                value={ cardName }
                onChange={ onInputChange }
                className="input"
                data-testid="name-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="description">
              Card description:
              <textarea
                id="description"
                name="cardDescription"
                value={ cardDescription }
                onChange={ onInputChange }
                data-testid="description-input"
                rows="5"
                cols="40"
              />
            </label>
          </div>
          <div>
            <label htmlFor="attr1">
              Attack:
              <input
                id="attr1"
                name="cardAttr1"
                type="number"
                value={ cardAttr1 }
                onChange={ onInputChange }
                className="input"
                data-testid="attr1-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="attr2">
              Defense:
              <input
                id="attr2"
                name="cardAttr2"
                type="number"
                value={ cardAttr2 }
                onChange={ onInputChange }
                className="input"
                data-testid="attr2-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="attr3">
              Card number:
              <input
                id="attr3"
                name="cardAttr3"
                type="number"
                value={ cardAttr3 }
                onChange={ onInputChange }
                className="input"
                data-testid="attr3-input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="card-image">
              Card image:
              <input
                id="card-image"
                name="cardImage"
                type="text"
                value={ cardImage }
                onChange={ onInputChange }
                className="input"
                data-testid="image-input"
              />
            </label>
          </div>
          <div>
            <span>Card rarity:</span>
            <select
              id="card-rarity"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              {/* <option>Selecione a raridade</option> */}
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </div>
          {!handleSpan ? newTrunfo : alreadyHasTrunfo}

          <button
            type="button"
            name="isSaveButtonDisabled"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>
        </fieldset>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  handleSpan: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
