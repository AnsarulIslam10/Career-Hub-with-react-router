import React from "react";

const JobCard = ({ jobData }) => {
  const {
    logo,
    job_title,
    salary,
    job_type,
    location,
    remote_or_onsite,
    company_name,
  } = jobData;
  return (
    <div className="p-8 border rounded-xl w-[560px] shadow-lg">
      <img src={logo} alt="" />
      <h3 className="text-lg font-bold mt-2">{job_title}</h3>
      <p className="text-gray-500">{company_name}</p>
      <div className="flex items-center gap-2 my-2">
        <p className="px-4 py-2 border border-blue-600 rounded-sm text-blue-600">
          {remote_or_onsite}
        </p>
        <p className="px-4 py-2 border border-blue-600 rounded-sm text-blue-600">
          {job_type}
        </p>
      </div>
      <div className="flex items-center gap-4 font-semibold text-gray-400 mb-3">
        <div className="flex items-center">
          <img src="https://i.ibb.co.com/9cDPj4z/location2.png" alt="" />
          <p>{location}</p>
        </div>
        <div className="flex items-center">
            <img src="https://i.ibb.co.com/K6TxMrk/money.png" alt="" />
        <p>{salary}</p>
        </div>
      </div>
      <button className="btn btn-info text-white font-bold">
        View Details
      </button>
    </div>
  );
};

export default JobCard;
