import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserForm from './UserForm'

class Profile extends Component {

    state = { edit: false }

    toggleEdit = () => {
        this.setState({ edit: true })
    }

    whatToRender = () => {
        if (this.state.edit) { 
        return <UserForm {...this.props.user}/> 
        } else {
           return (<div>
            <h3>Username: {this.props.user.username}</h3>
            <h3>{this.props.user.email}</h3>
            <h3>Tasks created:{this.props.user.created_jobs.length}</h3>
            <h3>Tasks booked:{this.props.user.helping_jobs.length}</h3>
            {/* implement photo upload */}
            <button>
              <Link className="wordLink" to="/instructions">
                INSTRUCTIONS
              </Link>
            </button>
            <button onClick={this.toggleEdit}>EDIT YOUR DETAILS</button>
            <div>
              <button onClick={this.props.logOut}>LOG OUT</button>
            </div>
            </div>)
        }
    }

  render() {
    return (
      <div>
          {this.whatToRender()}
      </div>
    );
  }
}

export default Profile;
