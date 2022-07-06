import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TWELVE, ApiFoods } from '../helpers/index';
import '../../App.css';
import RecipeCard from './RecipeCard';
import { setInitialMeals } from '../../redux/slices/sliceOfFood';

function MealsRender() {
  const dispatch = useDispatch();
  const foodSelector = useSelector(({ foodSlice }) => (foodSlice));
  const searchSelector = useSelector(({ search }) => (search));
  const { meals } = searchSelector.data;
  const { initialMeals } = foodSelector;
  const buttonSelector = useSelector(({ buttonFilter }) => buttonFilter);
  const { cards, allCategory } = buttonSelector;

  useEffect(() => {
    const recipesFoods = async () => {
      const request = await fetch(ApiFoods);
      const response = await request.json();
      const allProducts = response.meals.filter((_food, index) => index < TWELVE);
      dispatch(setInitialMeals(allProducts));
    };

    if (initialMeals.length === 0) {
      recipesFoods();
    }
  }, []);

  return (
    <div>
      {((!meals && cards.length === 0) || allCategory)
        && initialMeals.map((food, index) => (
          <div key={ index }>
            <RecipeCard index={ index } food={ food } />
          </div>
        ))}
      {meals
        && cards.length === 0
        && !allCategory
        && meals
          .filter((_food, index) => index <= TWELVE)
          .map((filteredFood, filteredIndex) => (
            <div key={ filteredIndex }>
              <RecipeCard index={ filteredIndex } food={ filteredFood } />
            </div>
          ))}
      {cards.length > 0
        && !allCategory
        && cards.map((foodCategory, index) => (
          <div key={ index }>
            <RecipeCard index={ index } food={ foodCategory } />
          </div>
        ))}
    </div>
  );
}

export default MealsRender;
