import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {

  state = {
    selected: "Profile"
  }

  changeSelected = (e) => {
    console.log(e.target.innerText.trim())
    this.setState({ selected: e.target.innerText.trim() })
  }

  render() {
    return (
      <div className="navbar">
        <div  className="navbarItem">
          <Link onClick={this.changeSelected} className={this.state.selected === "Profile" ? "selected" : "navLink"} to="/dashboard">
            <i className="fas fa-home"></i> <br />
            Profile
          </Link>
        </div>

        <div  className="navbarItem">
          <Link onClick={this.changeSelected} className={this.state.selected === "Find Tasks" ? "selected" : "navLink"} to="/browse-tasks">
            <i className="fas fa-search"></i>  <br />Find Tasks
          </Link>
        </div>

        <div  className="navbarItem">
          <Link onClick={this.changeSelected} className={this.state.selected === "My Tasks" ? "selected" : "navLink"} to="/my-tasks">
            <i className="fas fa-tasks"></i> <br /> My Tasks{" "}            
          </Link>
        </div>

        <div  className="navbarItem">
          <Link onClick={this.changeSelected} className={this.state.selected === "New Task" ? "selected" : "navLink"} to="/create-task">
            <i className="far fa-calendar-plus"></i><br /> New Task            
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
