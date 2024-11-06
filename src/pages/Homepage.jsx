import React from "react";
import Navbar from "../components/Navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div className="container flex flex-col justify-center items-center h-screen">
        <h1 className="text-3xl font-bold ">
          Wayan Deva Adhisthanaya
        </h1>
        <p>Belajar React JS</p>
      </div>
    </div>
  );
};

export default Homepage;
