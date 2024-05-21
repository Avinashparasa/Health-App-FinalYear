import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="h-20 shadow-md shadow-gray-300">
      <div className="pt-5 pl-10">
        <Link to={"/"}>
          <h1 className="font-bold text-3xl text-blue-700">Fitness Planner</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
