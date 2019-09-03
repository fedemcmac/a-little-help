import React, { Component } from "react";
import { withRouter, BrowserRouter, Route, Redirect } from "react-router-dom";
// import Dashboard from './Dashboard'
import Instructions from "./Instructions";
import Profile from "./Profile";
import BrowseJobsList from "./BrowseJobsList";
import MyJobsList from "./MyJobsList";
import JobForm from "./JobForm";
import Navbar from "./Navbar";
import JobShow from "./JobShow";

// check if this component really needs to be a class
class MembersArea extends Component {
  
  redirectToTaskShowPage = id => {
    this.props.history.push("/task/:id".replace(":id", id));
  };

  componentDidMount() {
    // this.props.fetchOthersJobs()
  }

  render() {
    return (
      <BrowserRouter>
        <div>
            <Navbar />
          <Route path="/instructions" component={Instructions} />
          <Route
            path="/dashboard"
            component={() => (
              <Profile user={this.props.user} logOut={this.props.logOut} />
            )}
          />
          <Route
            path="/browse-tasks"
            component={() => (
              <BrowseJobsList
                jobs={this.props.jobs}
                acceptJob={this.props.acceptJob}
                redirectToTaskShowPage={this.redirectToTaskShowPage}
              />
            )}
          />
          <Route
            path="/my-tasks"
            component={() => (
              <MyJobsList
                createdJobs={this.props.user.created_jobs}
                helpingJobs={this.props.user.helping_jobs}
                dropJob={this.props.dropJob}
                deleteJob={this.props.deleteJob}
                redirectToTaskShowPage={this.redirectToTaskShowPage}
              />
            )}
          />
          <Route
            path="/create-task"
            component={() => <JobForm submit={this.props.submitJob} />}
          />
          <Route
            path="/task/:id"
            component={() => (
              <JobShow
                userId={this.props.user.id}
                acceptJob={this.props.acceptJob}
                dropJob={this.props.dropJob}
                editJob={this.props.editJob}
                deleteJob={this.props.deleteJob}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(MembersArea);
