import React from "react";

const userRegister = () => {
  return (
    <div className="my-10 flex justify-center">
      <form className="md:w-1/2 w-10/12 my-5">
        <h3 className="font-bold text-2xl text-blue-700 md:pt-10 mb-5">
          Sign Up
        </h3>
        <div className="mb-2">
          <label className="text-blue-400 font-semibold  block mb-2">
            User Name
          </label>
          <input
            type="text"
            className="w-full md:w-10/12 h-10 outline outline-1 rounded outline-gray-200"
          />
        </div>
        <div className="mb-2">
          <label className="text-blue-400 font-semibold  block mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full md:w-10/12 h-10 outline outline-1 rounded outline-gray-200"
          />
        </div>
        <div className="mb-2">
          <label className="text-blue-400 font-semibold  block mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full md:w-10/12 h-10 outline outline-1 rounded outline-gray-200"
          />
        </div>
        <button className="bg-blue-700 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default userRegister;
