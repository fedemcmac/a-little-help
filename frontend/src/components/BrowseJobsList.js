import React from "react";
import JobCard from "./JobCard";
import Header from "./Header";

const BrowseJobsList = ({
  availableJobs,
  acceptJob,
  redirectToJobShowPage
}) => {
  return (
    <div className="scrollable">
      <Header title="Available tasks" />
      <div imageclass="flexJobsCardsContainer">
        {availableJobs.length === 0 ? (
          <p className="plainText">
            There are no available tasks at the moment
          </p>
        ) : (
          availableJobs.map(job => (
            <JobCard
              key={job.title}
              job={job}
              // buttonText="ACCEPT TASK"
              // handleButtonClick={acceptJob}
              handleJobClick={redirectToJobShowPage}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BrowseJobsList;
