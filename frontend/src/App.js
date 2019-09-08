import React, { Component } from "react";
import "./App.css";
import API from "./adapters/API";
import Welcome from "./components/Welcome";import { withRouter, Route } from "react-router-dom";
import MembersArea from "./components/MembersArea";

class App extends Component {
  state = {
    user: undefined,
    jobs: [],
  };

  componentDidMount() {
    API.validateUser().then(user => {
      if (!user.error) {
        this.setState({ user: user })
      } else {
        this.props.history.push("/welcome");
      }
    }).then(() => this.fetchJobs())
  }

  fetchJobs = () => {
    return API.getJobs().then(data => this.setState({ jobs: data }));
  };

  userCreatedJobs = () => {
    return this.state.jobs.filter(job => job.owner.id === this.state.user.id)
  };

  userHelpingJobs = () => {
    return this.state.user.helping_jobs_ids.map(helpingJobId => {
      return this.state.jobs.find(job => {
        return job.id === helpingJobId;
      });
    });
  };

  availableJobs = () => {
    const helping_jobs = this.userHelpingJobs()
    const created_jobs = this.userCreatedJobs()
    return this.state.jobs.filter(job => {
      return !helping_jobs.includes(job) && !created_jobs.includes(job)
    })
  };

  signUp = user => {
    API.signUp(user)
      .then(data => this.setState({ user: data }))
      .then(this.fetchJobs())
      .then(this.props.history.push("/dashboard"));
    this.props.history.push("/instructions");
  };

  logIn = user => {
    API.logIn(user)
      .then(user => {
        console.log('setting user state')
        this.setState({ user: user })
      })
      .then(() => this.fetchJobs())
      .then(this.props.history.push("/dashboard"));
  };

  logOut = () => {
    API.clearToken();
    this.setState({ user: undefined, jobs: [] });
    this.props.history.push("/welcome");
  };

  submitJob = job => {
    API.postJob(job).then(data =>
      this.setState({
        jobs: [...this.state.jobs, data.job]
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
////////////////////////////////
  dropJob = id => {
    API.dropJob(id).then(
      this.setState({
        user: {
          ...this.state.user,
          helping_jobs_ids: this.state.user.helping_jobs_ids.filter(jobId => {
            return jobId !== id
          }
          )
        }
      })
    )
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
        jobs: [this.state.jobs, data]
      })
    );
  };

  deleteJob = id => {
    API.deleteJob(id);
    this.setState({
      jobs: [this.state.jobs.filter(job => job.id === id)]
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
        {this.state.user && this.state.jobs.length > 0 ? (
          <Route
            path={"/"}
            render={routerProps => (
              <MembersArea
                {...routerProps}
                fetchJobs={this.fetchJobs}
                userCreatedJobs={this.userCreatedJobs()}
                userHelpingJobs={this.userHelpingJobs()}
                availableJobs={this.availableJobs()}
                submitJob={this.submitJob}
                logOut={this.logOut}
                user={this.state.user}
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
