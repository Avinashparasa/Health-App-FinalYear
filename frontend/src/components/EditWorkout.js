import React, { useState } from "react";

const EditWorkout = ({ data }) => {
  const [title, setTitle] = useState(data.title);
  const [load, setLoad] = useState(data.load);
  const [reps, setReps] = useState(data.reps);

  const editWorkout = async (e) => {
    e.preventDefault();
    console.log("edit workout is done");
  };

  return (
    <div className="md:col-span-5 md:m-4">
      <h3 className="text-center font-bold text-xl text-blue-700 pt-10">
        Edit Workout
      </h3>
      <form className="md:p-10 pt-5" onSubmit={editWorkout}>
        <div className="mb-3">
          <label className="text-blue-400 font-semibold block mb-2">
            Excersize Title:
          </label>
          <input
            type="text"
            className="w-full md:w-10/12 h-10 outline outline-1 rounded outline-gray-200"
            value={title}
          />
        </div>

        <div className="mb-3">
          <label className="text-blue-400 font-semibold block mb-2">
            Load (in kg):
          </label>
          <input
            type="number"
            className="w-full md:w-10/12 h-10 outline outline-1 rounded outline-gray-200"
            value={load}
          />
        </div>

        <div className="mb-3">
          <label className="text-blue-400 font-semibold block mb-2">
            Number of Reps:
          </label>
          <input
            type="number"
            className="w-full md:w-10/12 h-10 outline outline-1 rounded outline-gray-200"
            value={reps}
          />
        </div>
        <button className="bg-blue-700 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default EditWorkout;
