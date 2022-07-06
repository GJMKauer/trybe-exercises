import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  setDrinkIngredients,
  setInitialDrinks,
} from '../redux/slices/sliceOfFood';
import Footer from './components/Footer';
import '../App.css';
import Header from './components/Header';
import { ApiDrinkIngredients, TWELVE } from './helpers';

// const drinkImageURL = 'www.thecocktaildb.com/images/ingredients/';

function ExploreDrinksByIngredients() {
  const dispatch = useDispatch();
  const foodSelector = useSelector(({ foodSlice }) => foodSlice);
  const { drinkIngredients } = foodSelector;
  const history = useHistory();

  const fetchData = async () => {
    const response = await fetch(ApiDrinkIngredients);
    const data = await response.json();
    const ingredients = data.drinks.filter((e, i) => i < TWELVE);
    dispatch(setDrinkIngredients(ingredients));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const ingredientClick = async ({ strIngredient1 }) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${strIngredient1}`);
    const data = await response.json();
    const filteredDrinks = data.drinks.filter((e, i) => i < TWELVE);
    dispatch(setInitialDrinks(filteredDrinks));
    history.push('/drinks');
  };

  const ingredientKey = ({ key }) => {
    console.log(key);
  };

  return (
    <div>
      <Header />

      {drinkIngredients.map((ingredient, i) => (
        <div
          key={ i }
          data-testid={ `${i}-ingredient-card` }
          role="button"
          tabIndex={ 0 }
          onClick={ () => ingredientClick(ingredient) }
          onKeyDown={ (event) => ingredientKey(event) }
        >
          <p data-testid={ `${i}-card-name` }>{ingredient.strIngredient1}</p>
          <img
            alt="Ingrediente bonito"
            src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
            data-testid={ `${i}-card-img` }
          />
        </div>
      ))}

      <Footer />
    </div>
  );
}

export default ExploreDrinksByIngredients;
