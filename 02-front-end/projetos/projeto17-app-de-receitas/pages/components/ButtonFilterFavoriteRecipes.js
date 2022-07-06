import React from 'react';
import PropTypes from 'prop-types';

function ButtonFilterFavoriteRecipes({ setLocalStorageS }) {
  const getLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
  function resetFilters() {
    setLocalStorageS(getLocalStorage);
  }

  function filterByFoods() {
    const food = getLocalStorage.filter(({ type }) => type === 'food');
    setLocalStorageS(food);
  }

  function filterByDrinks() {
    const drinks = getLocalStorage.filter(({ type }) => type === 'drink');
    setLocalStorageS(drinks);
  }

  return (
    <div>
      <button type="button" data-testid="filter-by-all-btn" onClick={ resetFilters }>
        All
      </button>
      <button type="button" data-testid="filter-by-food-btn" onClick={ filterByFoods }>
        Food
      </button>
      <button type="button" data-testid="filter-by-drink-btn" onClick={ filterByDrinks }>
        Drinks
      </button>
    </div>
  );
}
ButtonFilterFavoriteRecipes.propTypes = {
  setLocalStorageS: PropTypes.func.isRequired,
};
export default ButtonFilterFavoriteRecipes;
