import {
  setDrinkDetail,
  setDrinkIngredients,
  setDrinkIngredientsMeasurement,
} from '../../redux/slices/drinkDetailSlice';
import {
  setFoodDetail,
  setFoodIngredients,
  setFoodIngredientsMeasurement,
} from '../../redux/slices/foodDetailSlice';

const SIX = 6;

const verifyEmail = /\S+@\S+\.\S+/;

const { email } = JSON.parse(localStorage.getItem('user')) || {};

const FIVE = 5;

const NINE = 9;

const TWELVE = 12;

const THIRTEEN = 13;

const FOURTEEN = 14;

const TWENTY_NINE = 29;

const FOURTY_NINE = 49;

const ApiFoods = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const ApiFoodIngredients = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';

const ApiDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const ApiDrinkIngredients = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

const ApiListFood = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';

const ApiListDrink = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

const handleFoods = (foodsID) => {
  const recipesInProgress = (JSON.parse(localStorage.getItem('inProgressRecipes')))
  || { cocktails: {}, meals: {} };

  localStorage.setItem('inProgressRecipes',
    JSON.stringify(
      {
        cocktails: { ...recipesInProgress.cocktails },
        meals: { ...recipesInProgress.meals, [foodsID]: [] },
      },
    ));
};

const handleDrinks = (drinksID) => {
  const recipesInProgress = (JSON.parse(localStorage.getItem('inProgressRecipes')))
  || { cocktails: {}, meals: {} };

  localStorage.setItem('inProgressRecipes',
    JSON.stringify(
      {
        cocktails: { ...recipesInProgress.cocktails, [drinksID]: [] },
        meals: { ...recipesInProgress.meals },
      },
    ));
};

const fetchDrink = async (dispatch, drinksID) => {
  const request = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinksID}`,
  );
  const response = await request.json();
  dispatch(setDrinkDetail(response));
  const drinkArray = response.drinks[0];
  const drinkArrayEntries = Object.entries(drinkArray).filter(
    (e) => e[0].includes('strIngredient') || e[0].includes('strMeasure'),
  );
  const drinkArrayIngredients = [];
  const drinkArrayMeasurements = [];
  drinkArrayEntries.forEach((e) => {
    if (e[0].includes('strIngredient')) drinkArrayIngredients.push(e[1]);
    else drinkArrayMeasurements.push(e[1]);
  });
  const slicedDrinkArrayIngredients = drinkArrayIngredients.filter(
    (ingred) => ingred !== '' && ingred !== null,
  );
  dispatch(setDrinkIngredients(slicedDrinkArrayIngredients));
  dispatch(setDrinkIngredientsMeasurement(drinkArrayMeasurements));

  const newStorage = {
    cocktails: { [response.drinks[0].idDrink]: [] },
    meals: {},
  };
  localStorage.setItem('inProgressRecipes', JSON.stringify(newStorage));
};

const fetchFood = async (dispatch, foodsID) => {
  const request = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodsID}`,
  );
  const response = await request.json();
  dispatch(setFoodDetail(response));
  const foodArray = response.meals[0];
  const foodValues = Object.values(foodArray);
  const slicedFoodIngredients = foodValues
    .slice(NINE, TWENTY_NINE)
    .filter((ingredient) => ingredient !== '' && ingredient !== null);
  const slicedFoodMeasurements = foodValues.slice(TWENTY_NINE, FOURTY_NINE);
  dispatch(setFoodIngredients(slicedFoodIngredients));
  dispatch(setFoodIngredientsMeasurement(slicedFoodMeasurements));

  const newStorage = {
    cocktails: {},
    meals: { [response.meals[0].idMeal]: [] },
  };
  localStorage.setItem('inProgressRecipes', JSON.stringify(newStorage));
};

export {
  verifyEmail,
  email,
  FIVE,
  SIX,
  NINE,
  TWELVE,
  THIRTEEN,
  FOURTEEN,
  TWENTY_NINE,
  FOURTY_NINE,
  ApiFoods,
  ApiDrink,
  ApiListFood,
  ApiListDrink,
  ApiFoodIngredients,
  ApiDrinkIngredients,
  handleFoods,
  handleDrinks,
  fetchDrink,
  fetchFood,
};
