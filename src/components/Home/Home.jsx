import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Jobs from "../Jobs/Jobs";

const Home = () => {
  return (
    <>
      <div className="bg-blue-50">
        <div className="w-11/12 mx-auto">
          <Banner />
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
      <Categories></Categories>
      <Jobs></Jobs>
      </div>
    </>
  );
};

export default Home;
