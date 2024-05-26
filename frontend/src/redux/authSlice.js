import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    register: null,
  },
  reducers: {
    userRegister: (state, action) => {
      state.register = action.payload;
    },
  },
});

export const { userRegister } = authSlice.actions;

export default authSlice.reducer;
