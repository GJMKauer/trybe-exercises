import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listFood: [],
  listDrink: [],
  cards: [],
  category: '',
  allCategory: false,
};

export const buttonFilterSlice = createSlice({
  name: 'buttonFilter',
  initialState,
  reducers: {
    setListFood: (state, action) => {
      state.listFood = action.payload;
    },
    setListDrink: (state, action) => {
      state.listDrink = action.payload;
    },
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setAllCategory: (state, action) => {
      state.allCategory = action.payload;
    },
  },
});

export const { setListFood, setListDrink, setCards,
  setCategory, setAllCategory } = buttonFilterSlice.actions;
export default buttonFilterSlice.reducer;
