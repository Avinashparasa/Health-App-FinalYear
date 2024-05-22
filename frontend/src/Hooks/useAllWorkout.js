import { useEffect } from "react";
import { useDispatch } from "react-redux";

//redux slices
import { allWorkouts } from "../redux/workoutSlice";

const useAllWorkout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchWorkoutsData = async () => {
      const result = await fetch("/workout");
      const data = await result.json();
      dispatch(allWorkouts(data));
    };
    fetchWorkoutsData();
  }, []);
};

export default useAllWorkout;
