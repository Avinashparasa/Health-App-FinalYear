import { createSlice } from "@reduxjs/toolkit";

export const workoutSlice = createSlice({
  name: "workout",
  initialState: {
    getWorkouts: [],
    addWorkout: null,
    removeWorkout: null,
  },
  reducers: {
    allWorkouts: (state, action) => {
      state.getWorkouts = action.payload;
    },
    newWorkout: (state, action) => {
      state.addWorkout = action.payload;
      state.getWorkouts.push(action.payload);
    },
    deleteWorkout: (state, action) => {
      state.removeWorkout = action.payload;
      state.getWorkouts = state.getWorkouts.filter(
        (workout) => workout._id !== action.payload._id
      );
    },
  },
});

export const { allWorkouts, newWorkout, deleteWorkout } = workoutSlice.actions;

export default workoutSlice.reducer;
