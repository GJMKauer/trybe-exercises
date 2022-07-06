import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import shareIcon from '../images/shareIcon.svg';
import FavoriteBtn from './components/FavoriteBtn';
import { fetchDrink } from './helpers';

function FoodsInProgress() {
  const dispatch = useDispatch();
  const drinkDetailSlice = useSelector(({ drinkDetail }) => drinkDetail);
  const { drinkDetail, drinkIngredients, drinkIngredientsMeasurement } = drinkDetailSlice;
  const { drinks } = drinkDetail;

  const [check, setCheck] = useState([]);
  const [alert, setAlert] = useState(''); // setar link da página no clipboard (estado para renderizar o link copied)
  const [ingredients, setIngredients] = useState([]);

  const localStorageMeals = JSON.parse(
    localStorage.getItem('inProgressRecipes'),
  ) || { meals: {}, cocktails: {} };

  const { pathname } = useLocation();
  const drinksID = pathname.split('/')[2];
  const shareLink = pathname.replace('/in-progress', '');

  useEffect(() => {
    if (localStorageMeals === null || drinks === undefined) {
      fetchDrink(dispatch, drinksID);
    }
  }, []);

  const handleRadio = ({ target }) => {
    const ingredientName = target.name;
    const i = target.id;
    let newIngredients = [];

    if (check.some((e) => e === i)) {
      newIngredients = ingredients.filter((e) => e !== ingredientName);
      setIngredients(newIngredients);
      const newCheck = check.filter((e) => e !== i);
      setCheck(newCheck);
    } else {
      newIngredients = [...ingredients, ingredientName];
      setIngredients(newIngredients);
      setCheck([...check, i]);
    }

    localStorage.setItem('inProgressRecipes', JSON.stringify(
      {
        ...localStorageMeals,
        cocktails: { ...localStorageMeals.cocktails, [drinksID]: newIngredients },
      },
    ));
  };

  const handleFinished = () => {
    const dateOfClick = new Date().toLocaleDateString(); // https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
    // const dateOfClick = `${today.getFullYear()}-${today.getMonth() + 1}-${today}`; // https://phoenixnap.com/kb/how-to-get-the-current-date-and-time-javascript
    const finishedRecipe = {
      id: drinks[0].idDrink,
      type: 'drink',
      nationality: '',
      category: drinks[0].strCategory,
      alcoholicOrNot: drinks[0].strAlcoholic,
      name: drinks[0].strDrink,
      image: drinks[0].strDrinkThumb,
      doneDate: dateOfClick,
      tags: [],
    };

    // console.log(today);

    const localStorageFinished = JSON.parse(
      localStorage.getItem('doneRecipes'),
    ) || [];

    const addRecipe = [...localStorageFinished, finishedRecipe];

    localStorage.setItem('doneRecipes', JSON.stringify(addRecipe));
  };

  return drinks
    ? drinks.map((recipe, index) => (
      <div key={ index }>
        <p data-testid="recipe-title">{recipe.strMeal}</p>
        <p data-testid="recipe-category">{recipe.strCategory}</p>
        <img
          src={ recipe.strDrinkThumb }
          alt="Recipe in progress"
          data-testid="recipe-photo"
        />
        <input
          type="image"
          src={ shareIcon }
          alt="Share icon"
          data-testid="share-btn"
          onClick={ () => {
            navigator.clipboard.writeText(`http://localhost:3000${shareLink}`);
            setAlert('Link copied!');
          } }
        />

        <FavoriteBtn drinks={ drinks } isMeal={ false } />

        <p>{alert}</p>

        <ul>
          {drinkIngredients.map((ingredient, i) => (
            <li key={ i }>
              <label
                className={ check.some((e) => parseFloat(e) === i) ? 'checked' : '' }
                data-testid={ `${index}-ingredient-step` }
                htmlFor={ i }
              >
                {`${ingredient} - ${drinkIngredientsMeasurement[i]}`}
                <input
                  onChange={ (event) => handleRadio(event) }
                  name={ ingredient }
                  type="checkbox"
                  id={ i }
                />
              </label>
            </li>
          ))}
        </ul>

        <p data-testid="instructions">{recipe.strInstructions}</p>

        <Link to="/done-recipes">
          <button
            disabled={ check.length !== drinkIngredients.length }
            type="button"
            data-testid="finish-recipe-btn"
            onClick={ handleFinished }
          >
            Finish recipe
          </button>
        </Link>
      </div>
    ))
    : <p>Carregando...</p>;
}

export default FoodsInProgress;
