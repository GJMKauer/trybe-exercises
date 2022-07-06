import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { handleDrinks } from '../helpers';
import RecipeCard from './RecipeCard';
import shareIcon from '../../images/shareIcon.svg';
import '../../App.css';
import FavoriteBtn from './FavoriteBtn';

function DrinkDetails() {
  const recipesInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'))
  || { meals: {}, cocktails: {} };

  const drinkDetailsSlice = useSelector(({ drinkDetail }) => drinkDetail);
  const {
    drinkDetail,
    drinkIngredients,
    drinkIngredientsMeasurement,
    foodRecommendation,
  } = drinkDetailsSlice;

  const { drinks } = drinkDetail;

  const { pathname } = useLocation();
  const drinksID = pathname.replace('/drinks/', '');
  const [alert, setAlert] = useState(''); // setar link da página no clipboard (estado para renderizar o link copied)
  const [teste, setTeste] = useState(false); // setar comida em progresso (estado para renderizar a página)

  return (
    <div>
      <img
        src={ drinks[0].strDrinkThumb }
        alt="Foto da bebida"
        data-testid="recipe-photo"
      />
      <input
        data-testid="share-btn"
        type="image"
        src={ shareIcon }
        alt="Botão de compartilhar"
        onClick={ () => {
          navigator.clipboard.writeText(`http://localhost:3000${pathname}`);
          setAlert('Link copied!');
        } }
      />
      <FavoriteBtn drinks={ drinks } isMeal={ false } />
      <p>{ alert }</p>
      <h1 data-testid="recipe-title">{ drinks[0].strDrink }</h1>
      <p data-testid="recipe-category">{ drinks[0].strCategory }</p>
      <p data-testid="recipe-category">{ drinks[0].strAlcoholic }</p>
      <ul>
        { drinkIngredients
          .map((filteredIngred, index) => (
            <li
              key={ `${filteredIngred}-${index}` }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              { drinkIngredientsMeasurement[index] !== null
                ? `${filteredIngred} - ${drinkIngredientsMeasurement[index]}`
                : `${filteredIngred}` }
            </li>
          )) }
      </ul>
      <p data-testid="instructions">{ drinks[0].strInstructions }</p>
      <p>Recomendações:</p>
      <div className="recommendation">
        { foodRecommendation.map((food, index) => (
          <div key={ index } data-testid={ `${index}-recomendation-card` }>
            <RecipeCard
              index={ index }
              food={ food }
              datatestid={ `${index}-recomendation-title` }
              detail
            />
          </div>
        )) }
      </div>
      { teste || (recipesInProgress.cocktails
          && Object.keys(recipesInProgress.cocktails).includes(drinksID))
        ? (
          <Link to={ `/drinks/${drinksID}/in-progress` }>
            <button
              type="button"
              data-testid="start-recipe-btn"
              className="start-recipe-button"
            >
              Continue Recipe
            </button>
          </Link>
        )
        : (
          <Link to={ `/drinks/${drinksID}/in-progress` }>
            <button
              type="button"
              data-testid="start-recipe-btn"
              className="start-recipe-button"
              onClick={ () => {
                handleDrinks(drinksID, drinkIngredients);
                setTeste(!teste);
              } }
            >
              Start Recipe
            </button>
          </Link>
        ) }
    </div>
  );
}

export default DrinkDetails;
