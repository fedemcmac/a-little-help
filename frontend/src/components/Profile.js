import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserForm from "./UserForm";
import Header from "./Header";

class Profile extends Component {
  state = { edit: false };

  toggleEdit = () => {
    this.setState({ edit: true });
  };

  whatToRender = () => {
    if (this.state.edit) {
      return <UserForm {...this.props.user} />;
    } else {
      return (
        <div className="fixed">
          <h3>Hello {this.props.user.username}!</h3>
          <h3>Your email: {this.props.user.email}</h3>
          <h3>Tasks created:{this.props.userCreatedJobs.length}</h3>
          <h3>Tasks booked:{this.props.userHelpingJobs.length}</h3>
          {/* implement photo upload */}
          <button className="ButtonPinkCenter">YOUR CREATED TASKS</button>
          <button className="ButtonPinkCenter" onClick={this.toggleEdit}>
            EDIT YOUR DETAILS
          </button>
          <button className="ButtonPinkCenter">
            <Link id="noUnderlineLink" to="/instructions">
              INSTRUCTIONS
            </Link>
          </button>

          <div>
            <button className="ButtonPinkCenter" onClick={this.props.logOut}>
              LOG OUT
            </button>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <Header title="Your profile" />
        {this.whatToRender()}
      </div>
    );
  }
}

export default Profile;
