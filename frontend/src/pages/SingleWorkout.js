import React from "react";
import { Link, useParams } from "react-router-dom";

//component
import EditWorkout from "../components/EditWorkout";

//custom hook
import useSingleWorkout from "../Hooks/useSingleWorkout";

const SingleWorkout = () => {
  const { id } = useParams();
  const { error, workout } = useSingleWorkout(id);

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
      <div className="md:p-2 pb-5 md:grid md:grid-cols-12">
        <div className="md:col-span-7 md:m-4 md:p-10">
          <h4 className="text-blue-600 font-semibold text-lg">
            {workout.title}
          </h4>
          <p className="font-medium">Number of reps: {workout.reps}</p>
          <p className="font-medium">Load (kg): {workout.load}</p>
          <p className="font-medium">{workout.createdAt}</p>
        </div>
        <EditWorkout data={workout} />
      </div>
      <Link to="/allworkout">
        <button className="bg-black text-white p-2 rounded">Back</button>
      </Link>
    </div>
  );
};

export default SingleWorkout;
