import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  initialMeals: [],
  initialDrinks: [],
  foodIngredients: [],
  drinkIngredients: [],
};

export const sliceOfFood = createSlice({
  name: 'foodSlice',
  initialState,
  reducers: {
    setInitialMeals: (state, action) => {
      state.initialMeals = action.payload;
    },
    setInitialDrinks: (state, action) => {
      state.initialDrinks = action.payload;
    },
    setFoodIngredients: (state, action) => {
      state.foodIngredients = action.payload;
    },
    setDrinkIngredients: (state, action) => {
      state.drinkIngredients = action.payload;
    },
  },
});

export const {
  setInitialMeals,
  setInitialDrinks,
  setFoodIngredients,
  setDrinkIngredients,
} = sliceOfFood.actions;

export default sliceOfFood.reducer;
