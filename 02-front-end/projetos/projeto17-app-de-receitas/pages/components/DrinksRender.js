import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TWELVE, ApiDrink } from '../helpers';
import RecipeCard from './RecipeCard';
import { setInitialDrinks } from '../../redux/slices/sliceOfFood';
import '../../App.css';

function DrinksRender() {
  const dispatch = useDispatch();
  const foodSelector = useSelector(({ foodSlice }) => foodSlice);
  const searchSelector = useSelector(({ search }) => search);
  const { drinks } = searchSelector.data;
  const { initialDrinks } = foodSelector;
  const buttonSelector = useSelector(({ buttonFilter }) => buttonFilter);
  const { cards, allCategory } = buttonSelector;

  useEffect(() => {
    const listFiltersDrink = async () => {
      const request = await fetch(ApiDrink);
      const response = await request.json();
      const filterDrink = response.drinks.filter(
        (_drinkCategory, index) => index < TWELVE,
      );
      dispatch(setInitialDrinks(filterDrink));
    };

    if (initialDrinks.length === 0) {
      listFiltersDrink();
    }
  }, []);

  return (
    <div>
      {((!drinks && cards.length === 0) || allCategory)
        && initialDrinks.map((drink, index) => (
          <div key={ index }>
            <RecipeCard index={ index } drink={ drink } />
          </div>
        ))}
      {drinks
        && cards.length === 0
        && !allCategory
        && drinks
          .filter((_drink, index) => index < TWELVE)
          .map((filteredDrink, filteredIndex) => (
            <div key={ filteredIndex }>
              <RecipeCard index={ filteredIndex } drink={ filteredDrink } />
            </div>
          ))}
      {cards.length > 0
        && !allCategory
        && cards.map((drinksCategory, index) => (
          <div key={ index }>
            <RecipeCard index={ index } drink={ drinksCategory } />
          </div>
        ))}
    </div>
  );
}

export default DrinksRender;
