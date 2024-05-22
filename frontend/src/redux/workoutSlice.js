import { createSlice } from "@reduxjs/toolkit";

export const workoutSlice = createSlice({
  name: "workout",
  initialState: {
    getWorkouts: null,
  },
  reducers: {
    allWorkouts: (state, action) => {
      state.getWorkouts = action.payload;
    },
  },
});

export const { allWorkouts } = workoutSlice.actions;

export default workoutSlice.reducer;
