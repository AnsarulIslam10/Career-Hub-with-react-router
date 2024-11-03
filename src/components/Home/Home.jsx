import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="bg-blue-50">
      <div className="w-11/12 mx-auto">
        <Banner />
      </div>
    </div>
  );
};

export default Home;
