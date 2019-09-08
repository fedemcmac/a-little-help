import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbarItem">
          <Link className="wordLink" to="/dashboard">
            <i class="fas fa-home"></i> <br />
            Profile
          </Link>
        </div>

        <div className="navbarItem">
          <Link className="wordLink" to="/browse-tasks">
            <i class="fas fa-search"></i>  <br />Find Tasks
          </Link>
        </div>

        <div className="navbarItem">
          <Link className="wordLink" to="/my-tasks">
            <i class="fas fa-tasks"></i> <br /> My Tasks{" "}            
          </Link>
        </div>

        <div className="navbarItem">
          <Link className="wordLink" to="/create-task">
            <i class="far fa-calendar-plus"></i> <br /> New Task            
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
