import React, { Component } from "react";
import Header from "./Header";

class UserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {username: props.username, email: props.email}
    }

    updateState = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

  render() {
    return (
      <div className="fixed">
      <Header title="Edit details" />
        <form 
            onSubmit={e => {
                e.preventDefault();
                this.props.submit({ ...this.state });
                this.setState({
                username: "",
                email: ""
                });
            }}>
            <input
                placeholder="Username"
                type="text"
                name="username"
                value={this.state.username}
                onChange={e => this.updateState(e)}
            /><br />
            <input
                placeholder="Email"
                type="text"
                name="email"
                value={this.state.email}
                onChange={e => this.updateState(e)}
            />
            <br />
          <button className="ButtonPinkCenter" value="Create Job">SUBMIT</button></form>
          <button className="ButtonPinkCenter" onClick={() => {console.log("delete")}}>DELETE ACCOUNT</button>
      </div>
    );
  }
}

export default UserForm;
