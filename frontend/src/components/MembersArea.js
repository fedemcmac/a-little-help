import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Instructions from "./Instructions";
import Profile from "./Profile";
import BrowseJobsList from "./BrowseJobsList";
import MyJobsList from "./MyJobsList";
import JobForm from "./JobForm";
import Navbar from "./Navbar";
import JobShow from "./JobShow";

class MembersArea extends Component {
  redirectToJobShowPage = id => {
    console.log(id);
    this.props.history.replace({ pathname: "/task/" + id });
  };

  componentDidMount() {
    this.props.fetchOthersJobs();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/instructions" component={Instructions} />
          <Route
            path="/dashboard"
            component={() => (
              <Profile
                user={this.props.user}
                userCreatedJobs={this.props.userCreatedJobs()}
                userHelpingJobs={this.props.userHelpingJobs()}
                logOut={this.props.logOut}
              />
            )}
          />
          <Route
            path="/browse-tasks"
            component={() => (
              <BrowseJobsList
                availableJobs={this.props.availableJobs()}
                acceptJob={this.props.acceptJob}
                redirectToJobShowPage={this.redirectToJobShowPage}
              />
            )}
          />
          <Route
            path="/my-tasks"
            render={() => (
              <MyJobsList
                userCreatedJobs={this.props.userCreatedJobs()}
                userHelpingJobs={this.props.userHelpingJobs()}
                dropJob={this.props.dropJob}
                deleteJob={this.props.deleteJob}
                redirectToJobShowPage={this.redirectToJobShowPage}
              />
            )}
          />
          <Route
            path="/create-task"
            component={() => <JobForm submit={this.props.submitJob} />}
          />
          <Route
            path="/task/:id"
            render={() => (
              <JobShow
                // allJobs={[
                //   ...this.props.jobs,
                //   ...this.props.user.created_jobs,
                //   ...this.props.user.helping_jobs
                // ]}
                userId={this.props.user.id}
                acceptJob={this.props.acceptJob}
                dropJob={this.props.dropJob}
                editJob={this.props.editJob}
                deleteJob={this.props.deleteJob}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default MembersArea;
