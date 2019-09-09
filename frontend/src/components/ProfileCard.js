import React from "react";

const ProfileCard = ({ username, email, userHelpingJobs, userCreatedJobs }) => {
  return (
    <div className="flexJobCard">
      <div>
        <h3 className="bigAndPinkJobCardTitle">Hello {username}!</h3>
        <h3 className="plainText">Your email: {email}</h3>
        <h3 className="plainText">You created {userCreatedJobs.length} {userCreatedJobs.length === 1 ? "task" : "tasks"}</h3>
        <h3 className="plainText">You are helping {userHelpingJobs.length} {userHelpingJobs.length === 1 ? "task" : "tasks"}</h3>
      </div>
    </div>
  );
};

export default ProfileCard;
