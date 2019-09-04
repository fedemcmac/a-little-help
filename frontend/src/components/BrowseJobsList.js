import React from 'react';
import JobCard from './JobCard'

const BrowseJobsList = ({ jobs, acceptJob, redirectToJobShowPage }) => {
    return(
        <div>
            {jobs.map(job => <JobCard key={job.title} job={job} buttonText="ACCEPT TASK" handleButtonClick={acceptJob} handleJobClick={redirectToJobShowPage}/>)}
        </div>
    )
}

export default BrowseJobsList