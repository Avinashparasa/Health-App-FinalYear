import React, { useEffect, useState } from "react";

//components
import WorkoutDetails from "../components/WorkoutDetails";
import AddWorkout from "../components/AddWorkout";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkoutsData = async () => {
      const result = await fetch("/workout");
      const data = await result.json();
      setWorkouts(data);
    };
    fetchWorkoutsData();
  }, []);

  return (
    <div className="p-10 md:grid md:grid-cols-12">
      <div className="md:col-span-7">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} data={workout} />
          ))}
      </div>
      <AddWorkout />
    </div>
  );
};

export default Home;
