import { createSlice } from "@reduxjs/toolkit";

export const workoutSlice = createSlice({
  name: "workout",
  initialState: {
    getWorkouts: [],
    addWorkout: null,
  },
  reducers: {
    allWorkouts: (state, action) => {
      state.getWorkouts = action.payload;
    },
    newWorkout: (state, action) => {
      state.addWorkout = action.payload;
      state.getWorkouts.push(action.payload);
    },
  },
});

export const { allWorkouts, newWorkout } = workoutSlice.actions;

export default workoutSlice.reducer;
