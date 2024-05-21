import React from "react";

const WorkoutDetails = ({ data }) => {
  return (
    <div className="my-4 pl-5 py-5 bg-slate-50">
      <h4 className="text-blue-600 font-semibold text-lg">{data.title}</h4>
      <p className="font-medium">Number of reps: {data.reps}</p>
      <p className="font-medium">Load (kg): {data.load}</p>
      <p className="font-medium">{data.createdAt}</p>
    </div>
  );
};

export default WorkoutDetails;
