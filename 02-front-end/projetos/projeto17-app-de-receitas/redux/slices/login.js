import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  password: '',
  email: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changePassword: (state, action) => {
      state.password = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { changePassword, changeEmail } = loginSlice.actions;
export default loginSlice.reducer;
