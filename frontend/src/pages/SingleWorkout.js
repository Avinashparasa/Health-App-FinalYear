import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleWorkout = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const response = await fetch("/workout/" + id, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await response.json();
        if (!response.ok) {
          setError(json.error);
        } else {
          setWorkout(json);
        }
      } catch (err) {
        setError("An error occurred while fetching the workout data.");
      }
    };

    fetchWorkout();
  }, [id]);

  if (error) {
    return (
      <div className="m-5">
        <p className="text-red-600 text-center font-bold text-2xl md:p-2 pb-5">
          ⚠️ {error}
        </p>
        <Link to="/allworkout">
          <button className="bg-black text-white p-2 rounded">Back</button>
        </Link>
      </div>
    );
  }

  if (!workout) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-5">
      <div className="text-center md:p-2 pb-5">
        <h4 className="text-blue-600 font-semibold text-lg">{workout.title}</h4>
        <p className="font-medium">Number of reps: {workout.reps}</p>
        <p className="font-medium">Load (kg): {workout.load}</p>
        <p className="font-medium">{workout.createdAt}</p>
      </div>
      <Link to="/allworkout">
        <button className="bg-black text-white p-2 rounded">Back</button>
      </Link>
    </div>
  );
};

export default SingleWorkout;
