import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
  return (
    <>
      <div className="bg-blue-50">
        <div className="w-11/12 mx-auto">
          <Banner />
        </div>
      </div>
      <div className="w-11/12 mx-auto">
      <Categories></Categories>
      </div>
    </>
  );
};

export default Home;
