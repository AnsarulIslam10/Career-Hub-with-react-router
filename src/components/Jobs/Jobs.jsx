import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCard from '../JobCard/JobCard';

const Jobs = () => {
    // const [jobs, setJobs] = useState([]);
    const jobsData = useLoaderData();
 
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center mt-32 gap-8 mb-32'>
            {
                jobsData.map(jobData => <JobCard key={jobData.id} jobData={jobData}></JobCard>)
            }
        </div>
    );
};

export default Jobs;