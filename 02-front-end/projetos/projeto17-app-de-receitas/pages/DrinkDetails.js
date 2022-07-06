import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import {
  setDrinkDetail,
  setDrinkIngredients,
  setDrinkIngredientsMeasurement,
  setDrinkRecommendation,
} from '../redux/slices/drinkDetailSlice';
import {
  SIX,
  ApiFoods,
} from './helpers';
import '../App.css';

function DrinkDetails() {
  const dispatch = useDispatch();
  const drinkDetailsSlice = useSelector(({ drinkDetail }) => drinkDetail);
  const { drinkDetail } = drinkDetailsSlice;

  const { pathname } = useLocation();

  useEffect(() => {
    let recipeID = '';
    const drinkDetails = async () => {
      recipeID = pathname.replace('/drinks/', '');
      const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeID}`);
      const response = await request.json();
      dispatch(setDrinkDetail(response));
      const drinkArray = response.drinks[0];
      const drinkArrayEntries = Object.entries(drinkArray)
        .filter((e) => e[0].includes('strIngredient') || e[0].includes('strMeasure'));
      const drinkArrayIngredients = [];
      const drinkArrayMeasurements = [];
      drinkArrayEntries.forEach((e) => {
        if (e[0].includes('strIngredient')) drinkArrayIngredients.push(e[1]);
        else drinkArrayMeasurements.push(e[1]);
      });
      const slicedDrinkArrayIngredients = drinkArrayIngredients
        .filter((ingred) => ingred !== '' && ingred !== null);
      dispatch(setDrinkIngredients(slicedDrinkArrayIngredients));
      dispatch(setDrinkIngredientsMeasurement(drinkArrayMeasurements));
      const requestRecommendation = await fetch(ApiFoods);
      const responseRecommendation = await requestRecommendation.json();
      const allRecommendation = responseRecommendation.meals.filter(
        (_food, index) => index < SIX,
      );
      dispatch(setDrinkRecommendation(allRecommendation));
    };
    drinkDetails();
  }, [pathname, dispatch]);

  return (Object.entries(drinkDetail).length > 0 && (
    <div>
      <RecipeDetails context="listDrinks" />
    </div>
  )
  );
}
// teste
export default DrinkDetails;
