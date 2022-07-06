import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  foodDetail: {},
  foodIngredients: [],
  foodIngredientsMeasurement: [],
  drinkRecommendation: [],
};

export const foodDetailSlice = createSlice({
  name: 'foodDetail',
  initialState,
  reducers: {
    setFoodDetail: (state, action) => {
      state.foodDetail = action.payload;
    },
    setFoodIngredients: (state, action) => {
      state.foodIngredients = action.payload;
    },
    setFoodIngredientsMeasurement: (state, action) => {
      state.foodIngredientsMeasurement = action.payload;
    },
    setDrinkRecommendation: (state, action) => {
      state.drinkRecommendation = action.payload;
    },
  },
});

export const {
  setFoodDetail,
  setFoodIngredients,
  setFoodIngredientsMeasurement,
  setDrinkRecommendation,
} = foodDetailSlice.actions;
export default foodDetailSlice.reducer;
