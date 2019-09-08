import React from 'react';
import JobCard from './JobCard'

const BrowseJobsList = ({ availableJobs, acceptJob, redirectToJobShowPage }) => {
    return(
        <div className="flexJobsCardsContainer">
            {availableJobs.map(job => <JobCard key={job.title} job={job} buttonText="ACCEPT TASK" handleButtonClick={acceptJob} handleJobClick={redirectToJobShowPage}/>)}
        </div>
    )
}

export default BrowseJobsList