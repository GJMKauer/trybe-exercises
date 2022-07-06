import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setFoodIngredients, setInitialMeals } from '../redux/slices/sliceOfFood';
import Footer from './components/Footer';
import '../App.css';
import Header from './components/Header';
import { ApiFoodIngredients, TWELVE } from './helpers';

function ExploreFoodsByIngredients() {
  const dispatch = useDispatch();
  const foodSelector = useSelector(({ foodSlice }) => foodSlice);
  const { foodIngredients } = foodSelector;
  const history = useHistory();

  const fetchData = async () => {
    const response = await fetch(ApiFoodIngredients);
    const data = await response.json();
    const ingredients = data.meals.filter((e, i) => i < TWELVE);
    dispatch(setFoodIngredients(ingredients));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const ingredientClick = async ({ strIngredient }) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${strIngredient}`);
    const data = await response.json();
    const filteredFoods = data.meals.filter((e, i) => i < TWELVE);
    dispatch(setInitialMeals(filteredFoods));
    history.push('/foods');
  };

  const ingredientKey = ({ key }) => {
    console.log(key);
  };

  return (
    <div>
      <Header />

      {foodIngredients.map((ingredient, i) => (
        <div
          key={ i }
          data-testid={ `${i}-ingredient-card` }
          role="button"
          tabIndex={ 0 }
          onClick={ () => ingredientClick(ingredient) }
          onKeyDown={ (event) => ingredientKey(event) }
        >
          <p data-testid={ `${i}-card-name` }>{ingredient.strIngredient}</p>
          <img
            alt="Ingrediente bonito"
            src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
            data-testid={ `${i}-card-img` }
          />
        </div>
      ))}

      <Footer />
    </div>
  );
}

export default ExploreFoodsByIngredients;
