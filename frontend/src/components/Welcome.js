import React, { Component } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Route, Switch, withRouter } from "react-router-dom";

class Welcome extends Component {
  goLogin = () => {
    this.props.history.push("/welcome/login");
  };

  goSignup = () => {
    this.props.history.push("/welcome/signup");
  };

  render() {
    let { signUp, logIn } = this.props;
    return (
      <div>
        <h1> A Little Help </h1>
        <h3>
          {" "}
          Independent volunteering <br /> on the micro scale{" "}
        </h3>
        <Switch>
          <Route
            path="/welcome/login"
            component={props => <Login {...props} handleSubmit={logIn} />}
          />
          <Route
            path="/welcome/signup"
            component={props => <Signup {...props} handleSubmit={signUp} />}
          />
        </Switch>
        {this.props.location.pathname === "/welcome" ? (
          <>
            <button onClick={this.goLogin}>LOGIN</button>
            <br />
            <button onClick={this.goSignup}>SIGN UP</button>
          </>
        ) : null}
      </div>
    );
  }
}

export default withRouter(Welcome);
