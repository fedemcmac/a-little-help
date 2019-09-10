import React from "react";
import Header from "./Header";

const NotFound = () => {
  return (
    <div>
      <Header title="Whoops"/>
      <h2 className="bigAndPinkAndAwayFromHeader">Hey</h2>
      <h4 id="msg"className="bigAndPinkAndAwayFromHeader">404 - The page you're looking for doesn't exist!</h4>
      {/* <img src={require("../images/hand404.png")} alt="hand"/> */}
    </div>
  );
};

export default NotFound;
