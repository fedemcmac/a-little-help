import React from 'react';
import JobCard from './JobCard'

const BrowseJobsList = ({ availableJobs, acceptJob, redirectToJobShowPage }) => {
    console.log('AVAILABLE',availableJobs)
    return(
        <div>
            {availableJobs.map(job => <JobCard key={job.title} job={job} buttonText="ACCEPT TASK" handleButtonClick={acceptJob} handleJobClick={redirectToJobShowPage}/>)}
        </div>
    )
}

export default BrowseJobsList