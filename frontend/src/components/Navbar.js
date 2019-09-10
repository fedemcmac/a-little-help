import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    selected: "/dashboard"
  };

  // componentDidMount() {
  //   // console.log(this.props.match.path)
  // }

  changeSelected = e => {
    this.setState({ selected: e.target.innerText.trim() });
  };

  setStartingState = () => {
    if (this.state.selected !== this.props.location.pathname) {
      this.setState({ selected: this.props.location.pathname });
    }
  };

  render() {
    return (
      <>
        {this.setStartingState()}
        <div className="navbar">
          <div className="navbarItem">
            <Link
              onClick={this.changeSelected}
              className={
                this.state.selected === "/dashboard" ? "selected" : "navLink"
              }
              to="/dashboard"
            >
              <i className="fas fa-home"></i> <br />
              Profile
            </Link>
          </div>

          <div className="navbarItem">
            <Link
              onClick={this.changeSelected}
              className={
                this.state.selected === "/browse-tasks" ? "selected" : "navLink"
              }
              to="/browse-tasks"
            >
              <i className="fas fa-search"></i> <br />
              Find Tasks
            </Link>
          </div>

          <div className="navbarItem">
            <Link
              onClick={this.changeSelected}
              className={
                this.state.selected === "/my-tasks" ? "selected" : "navLink"
              }
              to="/my-tasks"
            >
              <i className="fas fa-tasks"></i> <br /> My Tasks{" "}
            </Link>
          </div>

          <div className="navbarItem">
            <Link
              onClick={this.changeSelected}
              className={
                this.state.selected === "/create-task" ? "selected" : "navLink"
              }
              to="/create-task"
            >
              <i className="far fa-calendar-plus"></i>
              <br /> New Task
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Navbar);
