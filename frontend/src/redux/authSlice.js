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
      // Save user data to local storage
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    userLogin: (state, action) => {
      state.login = action.payload;
      // Save user data to local storage
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    userLogout: (state, action) => {
      state.register = null;
      state.login = null;
      //removing the user data from local storage
      localStorage.removeItem("user");
    },
  },
});

export const { userRegister, userLogin, userLogout } = authSlice.actions;

export default authSlice.reducer;
