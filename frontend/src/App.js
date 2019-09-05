import React, { Component } from "react";
import "./App.css";
// import Authentication from "./components/Authentication";
import API from "./adapters/API";
// import JobForm from "./components/JobForm";
import Welcome from "./components/Welcome";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
import { withRouter, Route } from "react-router-dom";
import MembersArea from "./components/MembersArea";
// import PrivateRoute from "./components/PrivateRoute"

class App extends Component {
  state = {
    user: undefined,
    jobs: []
  };

  componentDidMount() {
    API.validateUser().then(user => {
      if (!user.error) {
        this.setState({ user: user });
      } else {
        this.props.history.push("/welcome");
      }
    });
  }

  fetchOthersJobs = () => {
    console.log("ciao");
    return API.getJobs().then(data => this.setState({ jobs: data }))
  };

  userCreatedJobs = () => {
    return this.state.jobs.filter(job => job.owner.id === this.state.user.id);
  };

  userHelpingJobs = () => {
    return this.state.user.helping_jobs_ids.map(helpingJobId => {
      return this.state.jobs.find(job => {
        return job.id === helpingJobId
      })
    })
  }

  availableJobs = () => {
    return this.state.user.helping_jobs_ids.map(helpingJobId => {
      return this.state.jobs.find(job => {
        return job.id !== helpingJobId
      })
    })
  }

  signUp = user => {
    API.signUp(user)
      .then(data => this.setState({ user: data }))
      .then(this.props.history.push("/dashboard"));
    this.props.history.push("/instructions");
  };

  logIn = user => {
    API.logIn(user)
      .then(user => this.setState({ user: user }))
      .then(this.props.history.push("/dashboard"));
    // .then(API.getJobs().then(data => this.setState({ jobs: data })))
  };

  logOut = () => {
    API.clearToken();
    this.setState({ user: undefined, jobs: [] });
    this.props.history.push("/welcome");
  };

  submitJob = job => {
    API.postJob(job).then(data =>
      this.setState({
        jobs: [ ...this.state.jobs, data.job ]
          })
    );
    // .catch(errorPromise => {
    //   errorPromise
    //     .then(data => {
    //       this.setState({ errors: data.errors })
    //     })
    // })
  };
/////////////////////////////////////////
  findHelpingJob = id => {
    return this.state.user.helping_jobs.find(job => job.id === id);
  };

  dropJob = id => {
    API.dropJob(id);
    this.setState({
      user: {
        ...this.state.user,
        helping_jobs_ids: this.state.user.helping_jobs.filter(job => job.id === id)
      }
    });
  };

  acceptJob = id => {
    API.acceptJob(id).then(data =>
      this.setState({
        user: {
          ...this.state.user,
          helping_jobs_ids: [...this.state.user.helping_jobs_ids, data.job.id]
        }
      })
    );
  };

  editJob = job => {
    API.editJob(job).then(data =>
      this.setState({
        jobs: [
          this.state.jobs, data
        ]
      })
    );
  };

  deleteJob = id => {
    API.deleteJob(id);
    this.setState({
      jobs: [
        this.state.jobs.filter(job => job.id === id)
      ]
    });
    this.props.history.push("/my-tasks");
  };

  // findJob = id => {
  //   return (
  //     this.state.jobs.find(job => job.id === id) ||
  //     this.state.user.created_jobs.find(job => job.id === id) ||
  //     this.state.user.helping_jobs.find(job => job.id === id)
  //   );
  // };

  render() {
    return (
      <div className="App">
        {this.state.user ? (
          <Route
            path={"/"}
            render={routerProps => (
              <MembersArea
                {...routerProps}
                fetchOthersJobs={this.fetchOthersJobs}
                userCreatedJobs={this.userCreatedJobs}
                userHelpingJobs={this.userHelpingJobs}
                availableJobs={this.availableJobs}
                submitJob={this.submitJob}
                logOut={this.logOut}
                user={this.state.user}
                // jobs={this.state.jobs}
                acceptJob={this.acceptJob}
                dropJob={this.dropJob}
                editJob={this.editJob}
                deleteJob={this.deleteJob}
                // findJob={this.findJob}
              />
            )}
          />
        ) : (
          <Route
            path={"/welcome"}
            render={() => (
              <Welcome
                signUp={this.signUp}
                logIn={this.logIn}
                history={this.props.history}
              />
            )}
          />
        )
        // <div><button onClick={this.logOut}>Log out</button></div>
        }

        {/* <Route exact path="/login" component={Login} handleSubmit={this.logIn}/>
        <Route exact path="/signup" component={Signup} handleSubmit={this.signUp}/> */}
        {/* { !this.state.user ? 
        <Home signUp={this.signUp} logIn={this.logIn}/> 
        : 
        <div><button onClick={this.logOut}>Log out</button></div> } */}
        {/* {this.state.user && */}

        {/* <PrivateRoute path="/create-job" user={this.state.user} component={JobForm} submit={this.submitJob}/> */}
        {/* <JobForm submit={this.submitJob}/> */}
        {/* } */}
      </div>
    );
  }
}

export default withRouter(App);
