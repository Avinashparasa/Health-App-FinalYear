import React, { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";

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
    <div className="p-10">
      {workouts &&
        workouts.map((workout) => (
          <WorkoutDetails key={workout._id} data={workout} />
        ))}
    </div>
  );
};

export default Home;
