import React from "react";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse pb-0">
        <img
          src="https://i.ibb.co.com/MMZ063j/user.png"
          className="max-w-lg rounded-lg"
        />
        <div>
          <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /> <span className="text-blue-400">Dream Job</span></h1>
          <p className="py-6 text-gray-400">
          Explore thousands of job opportunities with all the information you need. <br /> Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <button className="btn btn-info text-white font-bold">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
