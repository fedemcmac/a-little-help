import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbarItem">
          <Link className="navLink" to="/dashboard">
            <i className="fas fa-home"></i> <br />
            Profile
          </Link>
        </div>

        <div className="navbarItem">
          <Link className="navLink" to="/browse-tasks">
            <i className="fas fa-search"></i>  <br />Find Tasks
          </Link>
        </div>

        <div className="navbarItem">
          <Link className="navLink" to="/my-tasks">
            <i className="fas fa-tasks"></i> <br /> My Tasks{" "}            
          </Link>
        </div>

        <div className="navbarItem">
          <Link className="navLink" to="/create-task">
            <i className="far fa-calendar-plus"></i><br /> New Task            
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
