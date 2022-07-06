import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drinkDetail: {},
  drinkIngredients: [],
  drinkIngredientsMeasurement: [],
  foodRecommendation: [],
};

export const drinkDetailSlice = createSlice({
  name: 'drinkDetail',
  initialState,
  reducers: {
    setDrinkDetail: (state, action) => {
      state.drinkDetail = action.payload;
    },
    setDrinkIngredients: (state, action) => {
      state.drinkIngredients = action.payload;
    },
    setDrinkIngredientsMeasurement: (state, action) => {
      state.drinkIngredientsMeasurement = action.payload;
    },
    setDrinkRecommendation: (state, action) => {
      state.foodRecommendation = action.payload;
    },
  },
});

export const {
  setDrinkDetail,
  setDrinkIngredients,
  setDrinkIngredientsMeasurement,
  setDrinkRecommendation,
} = drinkDetailSlice.actions;
export default drinkDetailSlice.reducer;
