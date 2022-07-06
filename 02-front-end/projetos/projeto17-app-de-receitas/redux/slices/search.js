import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  search: '',
  radioFilter: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setRadioFilter: (state, action) => {
      state.radioFilter = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setSearch, setRadioFilter, setData } = searchSlice.actions;
export default searchSlice.reducer;
