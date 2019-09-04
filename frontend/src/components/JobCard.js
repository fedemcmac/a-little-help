import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job, handleButtonClick, buttonText, handleJobClick }) => {
  return (
    <div>
      <div onClick={() => handleJobClick(job.id)}>
        <h4>Title: </h4>
        <p>{job.title}</p>
        <h4>Summary: </h4>
        <p>{job.summary}</p>
      </div>
      <div>
        <button onClick={() => handleButtonClick(job.id)}>{buttonText}</button>
      </div>
    </div>
  );
};

export default JobCard;
