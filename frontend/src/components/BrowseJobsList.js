import React from "react";
import JobCard from "./JobCard";
import Header from "./Header";
import Searchbar from "./Searchbar";
import FilterJobs from "./FilterJobs";

const BrowseJobsList = ({
  availableJobs,
  acceptJob,
  redirectToJobShowPage,
  updateSearchTerm,
  searchTerm,
  filterChoice,
  updateFilterChoice
}) => {
  return (
    <div className="scrollable">
      <Header title="Available tasks" />
      <div imageclass="flexJobsCardsContainer">
        <FilterJobs
          filterChoice={filterChoice}
          updateFilterChoice={updateFilterChoice}
        />
        <Searchbar
          key="searchbar"
          updateSearchTerm={updateSearchTerm}
          searchTerm={searchTerm}
        />
        {availableJobs.length === 0 ? (
          <p className="plainText">There are no available tasks</p>
        ) : (
          availableJobs.map(job => (
            <JobCard
              key={job.id}
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
