import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import shareIcon from '../images/shareIcon.svg';
import '../App.css';
import { fetchFood } from './helpers';
import FavoriteBtn from './components/FavoriteBtn';

function FoodsInProgress() {
  const dispatch = useDispatch();
  const foodDetailSlice = useSelector(({ foodDetail }) => foodDetail);
  const { foodDetail, foodIngredients, foodIngredientsMeasurement } = foodDetailSlice;
  const { meals } = foodDetail;

  const [alert, setAlert] = useState(''); // setar link da página no clipboard (estado para renderizar o link copied)
  const [check, setCheck] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const localStorageMeals = JSON.parse(
    localStorage.getItem('inProgressRecipes'),
  ) || { meals: {}, cocktails: {} };

  const { pathname } = useLocation();
  const foodsID = pathname.split('/')[2];
  const shareLink = pathname.replace('/in-progress', '');

  useEffect(() => {
    if (localStorageMeals === null || meals === undefined) {
      fetchFood(dispatch, foodsID);
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
        meals: { ...localStorageMeals.meals, [foodsID]: newIngredients },
      },
    ));
  };

  const handleFinished = () => {
    const dateOfClick = new Date().toLocaleDateString();
    const finishedRecipe = {
      id: meals[0].idMeal,
      type: 'food',
      nationality: meals[0].strArea,
      category: meals[0].strCategory,
      alcoholicOrNot: '',
      name: meals[0].strMeal,
      image: meals[0].strMealThumb,
      doneDate: dateOfClick,
      tags: meals[0].strTags,
    };

    const localStorageFinished = JSON.parse(
      localStorage.getItem('doneRecipes'),
    ) || [];

    const addRecipe = [...localStorageFinished, finishedRecipe];

    localStorage.setItem('doneRecipes', JSON.stringify(addRecipe));
  };

  return meals
    ? meals.map((recipe, index) => (
      <div key={ index }>
        <p data-testid="recipe-title">{recipe.strMeal}</p>
        <p data-testid="recipe-category">{recipe.strCategory}</p>
        <img
          src={ recipe.strMealThumb }
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

        <FavoriteBtn meals={ meals } isMeal />

        <p>{alert}</p>

        <ul>
          {foodIngredients.map((ingredient, i) => (
            <li key={ i }>
              <label
                className={
                  check.some((e) => parseFloat(e) === i) ? 'checked' : ''
                }
                htmlFor={ i }
                data-testid={ `${index}-ingredient-step` }
              >
                {`${ingredient} - ${foodIngredientsMeasurement[i]}`}
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
            disabled={ check.length !== foodIngredients.length }
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
