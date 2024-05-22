import React from "react";
import { useSelector } from "react-redux";

//components
import WorkoutDetails from "../components/WorkoutDetails";
import AddWorkout from "../components/AddWorkout";

//custom hooks
import useAllWorkout from "../Hooks/useAllWorkout";

const Home = () => {
  useAllWorkout();
  const fullWorkouts = useSelector((store) => store.workout.getWorkouts);

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
