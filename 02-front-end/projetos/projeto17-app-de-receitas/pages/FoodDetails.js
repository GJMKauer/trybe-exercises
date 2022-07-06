import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import {
  setFoodDetail,
  setFoodIngredients,
  setFoodIngredientsMeasurement,
  setDrinkRecommendation,
} from '../redux/slices/foodDetailSlice';
import {
  SIX,
  NINE,
  TWENTY_NINE,
  FOURTY_NINE,
  ApiDrink,
} from './helpers';
import '../App.css';

function FoodDetails() {
  const dispatch = useDispatch();
  const foodDetailsSlice = useSelector(({ foodDetail }) => foodDetail);
  const { foodDetail } = foodDetailsSlice;

  const { pathname } = useLocation();

  useEffect(() => {
    let recipeID = '';
    const foodDetails = async () => {
      recipeID = pathname.replace('/foods/', '');
      const request = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`,
      );
      const response = await request.json();
      dispatch(setFoodDetail(response));
      const foodArray = response.meals[0];
      const foodValues = Object.values(foodArray);
      const slicedFoodIngredients = foodValues.slice(NINE, TWENTY_NINE)
        .filter((ingredient) => ingredient !== '' && ingredient !== null);
      const slicedFoodMeasurements = foodValues.slice(TWENTY_NINE, FOURTY_NINE);
      dispatch(setFoodIngredients(slicedFoodIngredients));
      dispatch(setFoodIngredientsMeasurement(slicedFoodMeasurements));
      const requestRecommendation = await fetch(ApiDrink);
      const responseRecommendation = await requestRecommendation.json();
      const allRecommendation = responseRecommendation.drinks
        .filter((_drink, index) => index < SIX);
      dispatch(setDrinkRecommendation(allRecommendation));
    };
    foodDetails();
  }, [pathname, dispatch]);

  return (
    Object.entries(foodDetail).length > 0 && (
      <div>
        <RecipeDetails context="listFoods" />
      </div>
    )
  );
}

export default FoodDetails;
