import React, { useEffect, useState } from "react";

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
        workouts.map((workout) => <p key={workout._id}>{workout.title}</p>)}
    </div>
  );
};

export default Home;
