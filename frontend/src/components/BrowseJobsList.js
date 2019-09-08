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
      <div className="flexJobsCardsContainer">
        {/* <h3 className="bigAndWhite">AVAILABLE TASKS</h3> */}
        {availableJobs.map(job => (
          <JobCard
            key={job.title}
            job={job}
            buttonText="ACCEPT TASK"
            handleButtonClick={acceptJob}
            handleJobClick={redirectToJobShowPage}
          />
        ))}
      </div>
    </div>
  );
};

export default BrowseJobsList;
