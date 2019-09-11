import React, { Component } from "react";
import "./App.css";
import API from "./adapters/API";
import Welcome from "./components/Welcome";
import { withRouter, Route } from "react-router-dom";
import MembersArea from "./components/MembersArea";

class App extends Component {
  state = {
    user: undefined,
    jobs: [],
    searchTerm: ""
  };

  componentDidMount() {
    API.validateUser().then(user => {
      if (!user.error) {
        this.setState({ user: user });
        this.fetchJobs();
      } else {
        this.props.history.push("/welcome");
      }
    });
  }

  fetchJobs = () => {
    return API.getJobs().then(data => this.setState({ jobs: data }));
  };

  userCreatedJobs = () => {
    return this.state.jobs.filter(job => job.owner.id === this.state.user.id);
  };

  userHelpingJobs = () => {
    return this.state.user.helping_jobs_ids.map(helpingJobId => {
      return this.state.jobs.find(job => {
        return job.id === helpingJobId;
      });
    });
  };

  availableJobs = () => {
    const helping_jobs = this.userHelpingJobs();
    const created_jobs = this.userCreatedJobs();
    return this.searchJobs().filter(job => {
      return !helping_jobs.includes(job) && !created_jobs.includes(job);
    });
  };

  signUp = user => {
    API.signUp(user)
      .then(data => this.setState({ user: data }))
      .then(() => this.fetchJobs())
      .then(this.props.history.push("/instructions/1"));
  };

  logIn = user => {
    API.logIn(user)
      .then(user => {
        if (!user.error) {
          this.setState({ user: user });
          this.fetchJobs();
        } else {
          this.props.history.push("/welcome");
        }
      })
      .then(() => this.fetchJobs())
      .then(this.props.history.push("/dashboard"));
  };

  // componentDidMount() {
  //   API.validateUser().then(user => {
  //     if (!user.error) {
  //       this.setState({ user: user });
  //       this.fetchJobs();
  //     } else {
  //       this.props.history.push("/welcome");
  //     }
  //   });
  // }

  logOut = () => {
    API.clearToken();
    this.setState({ user: undefined, jobs: [] });
    this.props.history.push("/welcome");
  };

  submitJob = job => {
    return API.postJob(job)
      .then(data => {
        this.setState({
          jobs: [...this.state.jobs, data.job]
        });
        return data;
      })
      .then(data => {
        this.props.history.push(`/task/${data.job.id}`);
        console.log(data);
        return data;
      });
  };

  dropJob = id => {
    API.dropJob(id).then(
      this.setState({
        user: {
          ...this.state.user,
          helping_jobs_ids: this.state.user.helping_jobs_ids.filter(jobId => {
            return jobId !== id;
          })
        }
      })
    );
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
    return API.editJob(job)
      .then(data => {
        this.setState({
          jobs: [
            ...this.state.jobs.filter(job => job.id !== data.job.id),
            data.job
          ]
        });
        return data;
      })
      .then(data => {
        this.props.history.push(`/task/${data.job.id}`);
        return data;
      });
  };

  deleteJob = id => {
    API.deleteJob(id);
    this.setState({
      jobs: this.state.jobs.filter(job => job.id !== id)
    });
    this.props.history.push("/my-tasks");
  };

  findJob = id => {
    return this.state.jobs.find(job => job.id === parseInt(id));
  };

  updateSearchTerm = event => {
    this.setState({ searchTerm: event.target.value });
    this.searchJobs();
  };

  searchJobs = () => {
    return this.state.jobs.filter(job => {
      return job.title
        .toLocaleLowerCase()
        .includes(this.state.searchTerm.toLocaleLowerCase());
    });
  };

  // resetSearchTermState = () => this.setState({ searchTerm: "" });

  // urlChangedAndSearchIsNotEmpty = () => this.props.location.pathname !== "/browse-tasks" && this.state.searchTerm

  // resetSearchIfUrlChangedAndSearchIsNotEmpty = () => {
  //   if (this.urlChangedAndSearchIsNotEmpty()) {
  //     this.resetSearchTermState();
  //   }
  // }

  // componentDidUpdate() { 
  //   this.resetSearchIfUrlChangedAndSearchIsNotEmpty()
  // }

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
                findJob={this.findJob}
                updateSearchTerm={this.updateSearchTerm}
                searchTerm={this.state.searchTerm}
                path={this.props.location.pathname}
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
        )}
      </div>
    );
  }
}

export default withRouter(App);
