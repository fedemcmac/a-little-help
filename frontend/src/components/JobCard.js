import React from "react";

const JobCard = ({ job, handleButtonClick, buttonText, handleJobClick }) => {
  return (
    <div className="flexJobCard">
      <div onClick={() => handleJobClick(job.id)}>
        <p className="bigAndPinkJobCardTitle">{job.title}</p>
        <p className="plainText">{job.summary}</p>
      </div>
      {/* <div> */}
        {/* <button  className="ButtonPinkCenter"onClick={() => handleButtonClick(job.id)}>{buttonText}</button> */}
      {/* </div> */}
    </div>
  );
};

export default JobCard;
