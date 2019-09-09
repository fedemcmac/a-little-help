import React from "react";
import Header from "./Header";
import JobCard from "./JobCard";

const CreatedJobs = ({ userCreatedJobs, findJob, redirectToJobShowPage }) => {
  return (
    <div className="scrollable">
      <Header title="Created jobs" />         
      {userCreatedJobs.length === 0
          ? <p className="plainText">You haven't created any tasks yet</p>
          : userCreatedJobs.map(job => (
        <JobCard
          key={job.title}
          job={job}
          findJob={findJob}
          handleJobClick={redirectToJobShowPage}
        />
      ))}
    </div>
  );
};

export default CreatedJobs;
