import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";
import API from "../adapters/API";
import JobForm from "./JobForm";

class JobShow extends Component {
  state = {
    selectedJob: null,
    edit: false
  };

  componentDidMount() {
    // debugger;
    const jobId = this.props.match.params.id;
    API.showJob(jobId).then(job => {
      if (job.error) {
        console.log("Invalid job id");
      } else {
        this.setState({ selectedJob: job.job });
      }
    });
  }

  renderJob = job => {
    debugger;
    if (job !== null) {
      return this.state.edit ? (
        <JobForm jobToEdit={job} submit={this.props.editJob} />
      ) : (
        <div>
          <h2>Title: {job.title}</h2>
          <h3>Summary: {job.title}</h3>
          <h4>Category: {job.category}</h4>
          <h4>Description: </h4>
          <p>{job.description}</p>
          {job.owner.id === this.props.userId ? (
            <div>
              <button onClick={() => this.setState({ edit: true })}>
                EDIT TASK
              </button>
              <button onClick={() => this.props.deleteJob(job.id)}>
                DELETE TASK
              </button>
            </div>
          ) : job.helpers.find(user => user.id === this.props.userId) ? (
            <button onClick={() => this.props.dropJob(job.id)}>
              DROP TASK
            </button>
          ) : (
            <button onClick={() => this.props.acceptJob(job.id)}>
              ACCEPT TASK
            </button>
          )}
          {/* <Route
            path="/edit-task"
            component={() => <JobForm jobToEdit={task} />} //submit={this.props.submitJob}
          /> */}
        </div>
      );
    }
  };

  render() {
    const targetJob =
      // this.props.allJobs.find(t => t.id == this.props.match.params.id) ||
      null;

    return <div>{this.renderJob(targetJob)}</div>;
  }
}

export default withRouter(JobShow);
