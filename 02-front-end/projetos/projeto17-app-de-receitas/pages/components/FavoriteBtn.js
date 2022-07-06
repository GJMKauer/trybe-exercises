import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AddToFavoriteButton from './AddToFavoriteButton';
import RemoveFromFavoriteButton from './RemoveFromFavoriteButton';

function FavoriteBtn({ meals, drinks, isMeal }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [unfavorite, setUnfavorite] = useState(false);
  const [localStorageS, setLocalStorageS] = useState([{
    id: '',
    type: '',
    nationality: '',
    category: '',
    alcoholicOrNot: '',
    name: '',
    image: '',
  }]);

  useEffect(() => {
    setLocalStorageS(JSON.parse(localStorage.getItem('favoriteRecipes')) || []);
  }, [isFavorite, unfavorite]);

  const addFavoriteFood = () => {
    const favoriteRecipe = {
      id: meals[0].idMeal,
      type: 'food',
      nationality: meals[0].strArea,
      category: meals[0].strCategory,
      alcoholicOrNot: '',
      name: meals[0].strMeal,
      image: meals[0].strMealThumb,
    };

    setIsFavorite(true);

    if (Object.values(localStorageS)
      .filter((e) => e.id === meals[0].idMeal).length === 0) {
      localStorage.setItem('favoriteRecipes',
        JSON.stringify([...localStorageS, favoriteRecipe]));
    }
  };

  const deleteFavoriteFood = () => {
    setUnfavorite(true);

    const filteredFavoriteRecipes = localStorageS
      .filter((e) => e.id !== meals[0].idMeal);
    localStorage.setItem('favoriteRecipes', JSON.stringify(filteredFavoriteRecipes));

    if (filteredFavoriteRecipes.length === 0) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
  };

  const addFavoriteDrink = () => {
    const favoriteRecipe = {
      id: drinks[0].idDrink,
      type: 'drink',
      nationality: '',
      category: drinks[0].strCategory,
      alcoholicOrNot: drinks[0].strAlcoholic,
      name: drinks[0].strDrink,
      image: drinks[0].strDrinkThumb,
    };

    setIsFavorite(true);

    if (Object.values(localStorageS)
      .filter((e) => e.id === drinks[0].idDrink).length === 0) {
      localStorage.setItem('favoriteRecipes',
        JSON.stringify([...localStorageS, favoriteRecipe]));
    }
  };

  const deleteFavoriteDrink = () => {
    const filteredFavoriteRecipes = localStorageS
      .filter((e) => e.id !== drinks[0].idDrink);
    localStorage.setItem('favoriteRecipes', JSON.stringify(filteredFavoriteRecipes));

    setUnfavorite(true);

    if (filteredFavoriteRecipes.length === 0) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([]));
    }
  };

  if (isMeal) {
    return (
      <div>
        {localStorageS
        && (Object.values(localStorageS).filter((e) => e.id === meals[0].idMeal))
          .length > 0 ? (
            <RemoveFromFavoriteButton
              handleFunction={ deleteFavoriteFood }
            />
          ) : (
            <AddToFavoriteButton handleFunction={ addFavoriteFood } />
          )}
      </div>
    );
  }
  return (
    <div>
      {localStorageS && Object.values(localStorageS)
        .filter((e) => e.id === drinks[0].idDrink).length > 0 ? (
          <RemoveFromFavoriteButton
            handleFunction={ deleteFavoriteDrink }
          />
        ) : (
          <AddToFavoriteButton handleFunction={ addFavoriteDrink } />
        )}
    </div>
  );
}

FavoriteBtn.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object),
  isMeal: PropTypes.bool.isRequired,
  drinks: PropTypes.arrayOf(PropTypes.object),
};

FavoriteBtn.defaultProps = {
  meals: [],
  drinks: [],
};

export default FavoriteBtn;
