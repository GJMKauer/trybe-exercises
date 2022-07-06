import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
// import Context from '../../Context/Context';
import {
  setListFood,
  setListDrink,
  setCards,
  setCategory,
  setAllCategory,
} from '../../redux/slices/buttonFilter';
import { FIVE, TWELVE, ApiListFood, ApiListDrink } from '../helpers/index';

const ButtonFilter = ({ context }) => {
  const buttonSelector = useSelector(({ buttonFilter }) => buttonFilter);
  const { category, cards, listFood, listDrink, allCategory } = buttonSelector;
  const dispatch = useDispatch();

  useEffect(() => {
    const listFiltersFood = async () => {
      const request = await fetch(ApiListFood);
      const response = await request.json();
      const filterFood = response.meals.filter(
        (_foodCategory, index) => index < FIVE,
      );
      dispatch(setListFood(filterFood));
    };
    listFiltersFood();
  }, [dispatch]);

  useEffect(() => {
    const listFiltersDrink = async () => {
      const request = await fetch(ApiListDrink);
      const response = await request.json();
      const filterDrink = response.drinks.filter(
        (_drinkCategory, index) => index < FIVE,
      );
      dispatch(setListDrink(filterDrink));
    };
    listFiltersDrink();
  }, [dispatch]);

  const handleCategory = async (categoryValue) => {
    const foodArray = ['Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat'];
    let allProducts = [];
    if (cards.length > 0 && category === categoryValue) {
      dispatch(setCards([]));
    } else {
      if (foodArray.includes(categoryValue)) {
        const request = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryValue}`,
        );
        const responseFood = await request.json();
        allProducts = responseFood.meals.filter(
          (_food, index) => index < TWELVE,
        );
      } else {
        const request = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryValue}`,
        );
        const responseDrink = await request.json();
        allProducts = responseDrink.drinks.filter(
          (_drink, index) => index < TWELVE,
        );
      }
      dispatch(setCategory(categoryValue));
      dispatch(setCards(allProducts));
      dispatch(setAllCategory(false));
    }
  };

  return (
    <div>
      {(context === 'listFood' ? listFood : listDrink).map(
        (cat, index) => (
          <button
            type="button"
            name={ cat.strCategory }
            key={ index }
            data-testid={ `${cat.strCategory}-category-filter` }
            onClick={ ({ target: { name } }) => {
              handleCategory(name);
            } }
          >
            {cat.strCategory}
          </button>
        ),
      )}
      <button
        type="button"
        name="All"
        data-testid="All-category-filter"
        onClick={ () => (dispatch(setAllCategory(!allCategory))) }
      >
        All
      </button>
    </div>
  );
};

ButtonFilter.propTypes = {
  context: propTypes.string.isRequired,
};

export default ButtonFilter;
