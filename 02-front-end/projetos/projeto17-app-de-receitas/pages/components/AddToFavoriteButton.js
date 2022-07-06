import React from 'react';
import propTypes from 'prop-types';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

function AddToFavoriteButton({ handleFunction }) {
  return (
    <input
      data-testid="favorite-btn"
      type="image"
      src={ whiteHeartIcon }
      alt="Botão de favoritar"
      onClick={ handleFunction }
    />
  );
}

AddToFavoriteButton.propTypes = {
  handleFunction: propTypes.func.isRequired,
};

export default AddToFavoriteButton;
