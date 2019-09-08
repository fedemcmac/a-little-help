import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job, handleButtonClick, buttonText, handleJobClick }) => {
  return (
    <div className="flexJobCard">
      <div onClick={() => handleJobClick(job.id)}>
        <p className="jobTitle">{job.title}</p>
        <p className="plainText">{job.summary}</p>
      </div>
      <div>
        <button  className="ButtonPinkCenter"onClick={() => handleButtonClick(job.id)}>{buttonText}</button>
      </div>
    </div>
  );
};

export default JobCard;
