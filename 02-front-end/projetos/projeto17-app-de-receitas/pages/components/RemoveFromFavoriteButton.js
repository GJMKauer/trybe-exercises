import React from 'react';
import propTypes from 'prop-types';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

function RemoveFromFavoriteButton({ handleFunction }) {
  return (
    <input
      data-testid="favorite-btn"
      type="image"
      src={ blackHeartIcon }
      alt="Botão de desfavoritar"
      onClick={ handleFunction }
    />
  );
}

RemoveFromFavoriteButton.propTypes = {
  handleFunction: propTypes.func.isRequired,
};

export default RemoveFromFavoriteButton;
