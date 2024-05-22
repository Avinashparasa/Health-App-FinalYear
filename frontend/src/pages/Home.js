import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//components
import WorkoutDetails from "../components/WorkoutDetails";
import AddWorkout from "../components/AddWorkout";

//redux slices
import { allWorkouts } from "../redux/workoutSlice";

const Home = () => {
  const dispatch = useDispatch();
  const fullWorkouts = useSelector((store) => store.workout.getWorkouts);

  useEffect(() => {
    const fetchWorkoutsData = async () => {
      const result = await fetch("/workout");
      const data = await result.json();
      dispatch(allWorkouts(data));
    };
    fetchWorkoutsData();
  }, []);

  return (
    <div className="p-10 md:grid md:grid-cols-12">
      <div className="md:col-span-7">
        {fullWorkouts &&
          fullWorkouts.map((workout) => (
            <WorkoutDetails key={workout._id} data={workout} />
          ))}
      </div>
      <AddWorkout />
    </div>
  );
};

export default Home;
