import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

function FavoriteCard({
  image,
  name,
  category,
  nationality,
  id,
  type,
  alcoholicOrNot,
  index,
  localStorageS,
  setUnfavorite,
  unfavorite,
}) {
  const [alert, setAlert] = useState('');
  console.log(type);

  const deleteFavorite = () => {
    setUnfavorite(!unfavorite);

    const filteredFavoriteRecipes = localStorageS
      .filter((e) => e.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(filteredFavoriteRecipes));

    if (filteredFavoriteRecipes.length === 0) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
  };

  switch (type) {
  case 'food':
    return (
      <div id={ id }>
        <Link to={ `/${type}s/${id}` }>
          <input
            style={ { width: '50%' } }
            type="image"
            src={ image }
            alt={ name }
            data-testid={ `${index}-horizontal-image` }
          />
        </Link>

        <Link to={ `/${type}s/${id}` }>
          <p data-testid={ `${index}-horizontal-name` }>{ name }</p>
        </Link>

        <p data-testid={ `${index}-horizontal-top-text` }>
          { `${nationality} - ${category}` }
        </p>

        <input
          data-testid={ `${index}-horizontal-favorite-btn` }
          type="image"
          src={ blackHeartIcon }
          alt="Botão de desfavoritar"
          onClick={ deleteFavorite }
        />

        <input
          type="image"
          src={ shareIcon }
          alt="Share icon"
          data-testid={ `${index}-horizontal-share-btn` }
          onClick={ () => {
            navigator.clipboard.writeText(`http://localhost:3000/foods/${id}`);
            setAlert('Link copied!');
          } }
        />

        <p>{alert}</p>
      </div>
    );
  default:
    return (
      <div id={ id }>
        <Link to={ `/${type}s/${id}` }>
          <input
            style={ { width: '50%' } }
            type="image"
            src={ image }
            alt={ name }
            data-testid={ `${index}-horizontal-image` }
          />
        </Link>

        <Link to={ `/${type}s/${id}` }>
          <p data-testid={ `${index}-horizontal-name` }>{ name }</p>
        </Link>

        <p data-testid={ `${index}-horizontal-top-text` }>{alcoholicOrNot}</p>

        <input
          data-testid={ `${index}-horizontal-favorite-btn` }
          type="image"
          src={ blackHeartIcon }
          alt="Botão de desfavoritar"
          onClick={ deleteFavorite }
        />

        <input
          type="image"
          src={ shareIcon }
          alt="Share icon"
          data-testid={ `${index}-horizontal-share-btn` }
          onClick={ () => {
            navigator.clipboard.writeText(`http://localhost:3000/drinks/${id}`);
            setAlert('Link copied!');
          } }
        />
        <p>{alert}</p>
      </div>
    );
  }
}
FavoriteCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  localStorageS: PropTypes.arrayOf(PropTypes.object).isRequired,
  setUnfavorite: PropTypes.func.isRequired,
  unfavorite: PropTypes.bool.isRequired,
};

export default FavoriteCard;
