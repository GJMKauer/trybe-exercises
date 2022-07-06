import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cocktails: '',
  meals: '',
};

export const recipeProgressSlice = createSlice({
  name: 'recipeProgress',
  initialState,
  reducers: {
    setCocktails: (state, action) => {
      state.cocktails = action.payload;
    },
    setMeals: (state, action) => {
      state.meals = action.payload;
    },
  },
});

export const {
  setCocktails,
  setMeals,
} = recipeProgressSlice.actions;
export default recipeProgressSlice.reducer;
