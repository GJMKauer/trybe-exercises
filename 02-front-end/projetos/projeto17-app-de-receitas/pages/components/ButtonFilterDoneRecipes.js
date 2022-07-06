import React from 'react';
import PropTypes from 'prop-types';

function ButtonFilterDoneRecipes({ setDoneRecipes }) {
  const getLocalStorage = JSON.parse(localStorage.getItem('doneRecipes'));
  function resetFilters() {
    setDoneRecipes(getLocalStorage);
  }

  function filterByFoods() {
    const food = getLocalStorage.filter(({ type }) => type === 'food');
    setDoneRecipes(food);
  }

  function filterByDrinks() {
    const drinks = getLocalStorage.filter(({ type }) => type === 'drink');
    setDoneRecipes(drinks);
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
ButtonFilterDoneRecipes.propTypes = {
  setDoneRecipes: PropTypes.func.isRequired,
};
export default ButtonFilterDoneRecipes;
