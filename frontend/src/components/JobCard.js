import React from "react";

const JobCard = ({ job, handleButtonClick, buttonText, handleJobClick, path }) => {
  return (
    <div className="flexJobCard">
      <div onClick={() => handleJobClick(job.id)}>
        <p className="bigAndPinkJobCardTitle">{job.title}</p>
        {path !== '/created-tasks' ? <p className="plainText">{job.summary}</p> : null}
        <p className="plainText">{job.address}</p>
      </div>
      {/* <div> */}
        {/* <button  className="ButtonPinkCenter"onClick={() => handleButtonClick(job.id)}>{buttonText}</button> */}
      {/* </div> */}
    </div>
  );
};

export default JobCard;
