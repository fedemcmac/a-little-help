import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Instructions from "./Instructions";
import Profile from "./Profile";
import BrowseJobsList from "./BrowseJobsList";
import MyJobsList from "./MyJobsList";
import JobForm from "./JobForm";
import Navbar from "./Navbar";
import JobShow from "./JobShow";
import CreatedJobs from "./CreatedJobs";
import NotFound from "./NotFound";

class MembersArea extends Component {
  redirectToJobShowPage = id => {
    this.props.history.replace({ pathname: "/task/" + id });
  };

  render() {
    return (
      <div className="fullHeight">
        <div className="top_level_navbar" id="top_level_navbar">
          <Navbar />
        </div>
        <div className="top_level_contents" key="top_level_contents">
          <Switch>
            <Route
              path="/instructions/1"
              component={() => (
                <Instructions
                  header="A little help"
                  title="Share some love by micro-volunteering, help people anywhere and anytime with small tasks."
                  imgClass="map"
                  imgSrc={require("../images/map.png")}
                  imgAlt="map"
                  previousPath="/dashboard"
                  nextPath="/instructions/2"
                />
              )}
            />
            <Route
              path="/instructions/2"
              component={() => (
                <Instructions
                  header="It's easy!"
                  title="Find the tasks you want to help with, contact their owner and organise the details together."
                  imgClass="phone"
                  imgSrc={require("../images/phone.png")}
                  imgAlt="phone"
                  previousPath="/instructions/1"
                  nextPath="/instructions/3"
                />
              )}
            />
            <Route
              path="/instructions/3"
              component={() => (
                <Instructions
                  header="Thank you"
                  title="No better exercise for the heart than reaching down and lifting people up."
                  imgClass="five"
                  imgSrc={require("../images/five.png")}
                  imgAlt="five"
                  previousPath="/instructions/2"
                  nextPath="/dashboard"
                />
              )}
            />
            <Route
              path="/dashboard"
              component={() => (
                <Profile
                  user={this.props.user}
                  userCreatedJobs={this.props.userCreatedJobs}
                  userHelpingJobs={this.props.userHelpingJobs}
                  logOut={this.props.logOut}
                />
              )}
            />
            <Route
              path="/browse-tasks"
              render={() => (
                <BrowseJobsList
                  key="browse-job-list"
                  availableJobs={this.props.availableJobs}
                  acceptJob={this.props.acceptJob}
                  redirectToJobShowPage={this.redirectToJobShowPage}
                  updateSearchTerm={this.props.updateSearchTerm}
                  searchTerm={this.props.searchTerm}
                  filterChoice={this.props.filterChoice}
                  updateFilterChoice={this.props.updateFilterChoice}
                />
              )}
            />
            <Route
              path="/created-tasks"
              render={() => (
                <CreatedJobs
                  userCreatedJobs={this.props.userCreatedJobs}
                  findJob={this.props.findJob}
                  redirectToJobShowPage={this.redirectToJobShowPage}
                  path={this.props.path}
                />
              )}
            />
            <Route
              path="/my-tasks"
              render={() => (
                <MyJobsList
                  userHelpingJobs={this.props.userHelpingJobs}
                  dropJob={this.props.dropJob}
                  deleteJob={this.props.deleteJob}
                  redirectToJobShowPage={this.redirectToJobShowPage}
                />
              )}
            />
            <Route
              path="/create-task"
              component={() => (
                <JobForm
                  submit={this.props.submitJob}
                  //turnEditOff={this.props.redirectToJobShowPage}
                />
              )}
            />
            <Route
              path="/task/:id"
              render={() => (
                <JobShow
                  findJob={this.props.findJob}
                  user={this.props.user}
                  acceptJob={this.props.acceptJob}
                  dropJob={this.props.dropJob}
                  editJob={this.props.editJob}
                  deleteJob={this.props.deleteJob}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default MembersArea;
