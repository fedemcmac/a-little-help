import React from 'react';  
import JobCard from './JobCard'

const MyJobsList = ({ createdJobs, helpingJobs, dropJob, deleteJob, redirectToTaskShowPage }) => {
    return(
        <div className="scrollable">
            <h3>Accepted tasks:</h3>
            {helpingJobs.length === 0 ?
                "You haven't volunteered for any tasks yet" :
                helpingJobs.map(job => <JobCard key={job.id} job={job} handleButtonClick={dropJob} buttonText="DROP TASK" handleJobClick={redirectToTaskShowPage}/>)}
            
            <h3>Created tasks:</h3>
            {createdJobs.length === 0 ?
            "You haven't created any tasks yet" :
                createdJobs.map(job => 
                <JobCard key={job.id} job={job} handleButtonClick={deleteJob} buttonText="DELETE TASK" handleJobClick={redirectToTaskShowPage} />)
            }
        </div>
    )
}

export default MyJobsList