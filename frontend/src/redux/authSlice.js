import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    register: null,
    login: null,
  },
  reducers: {
    userRegister: (state, action) => {
      state.register = action.payload;
    },
    userLogin: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { userRegister, userLogin } = authSlice.actions;

export default authSlice.reducer;
