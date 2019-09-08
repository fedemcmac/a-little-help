import React from "react";
import JobCard from "./JobCard";

const MyJobsList = ({
  userCreatedJobs,
  userHelpingJobs,
  dropJob,
  deleteJob,
  redirectToJobShowPage
}) => {
  return (
    <div className="scrollable">
      <h3>Accepted tasks:</h3>
      {userHelpingJobs.length === 0
        ? "You haven't volunteered for any tasks yet"
        : userHelpingJobs.map(job => (
            <JobCard
              key={job.id}
              job={job}
              handleButtonClick={dropJob}
              buttonText="DROP TASK"
              handleJobClick={redirectToJobShowPage}
            /> 
          ))}

      <h3>Created tasks:</h3>
      {userCreatedJobs.length === 0
        ? "You haven't created any tasks yet"
        : userCreatedJobs.map(job => (
            <JobCard
              key={job.id}
              job={job}
              handleButtonClick={deleteJob}
              buttonText="DELETE TASK"
              handleJobClick={redirectToJobShowPage}
            />
          ))}
    </div>
  );
};

export default MyJobsList;
