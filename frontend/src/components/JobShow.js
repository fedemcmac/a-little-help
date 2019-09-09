import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import JobForm from "./JobForm";
import Header from "./Header";
import MapContainer from "./MapContainer";

class JobShow extends Component {
  state = {
    selectedJob: null,
    edit: false
  };

  componentDidMount() {
    const selectedJobId = this.props.match.params.id;
    const selectedJobObj = this.props.findJob(selectedJobId);
    this.setState({ selectedJob: selectedJobObj });
  }

  turnEditOff = data => {
    this.setState({ edit: false, selectedJob: data.job });
  };

  renderJob = job => {
    if (job !== null) {
      return this.state.edit ? (
        <JobForm
          jobToEdit={job}
          submit={this.props.editJob}
          turnEditOff={this.turnEditOff}
        />
      ) : (
        <div className="scrollable">
          <Header title={`Task #${job.id}`} />
          <h2 className="bigAndPinkAndAwayFromHeader">{job.title}</h2>
          <h3>Summary: {job.summary}</h3>
          <h4>Category: {job.category}</h4>
          <p>{job.description}</p>
          {this.renderButtons(job)}
        </div>
      );
    }
  };

  renderButtons = job => {
    if (job.owner.id === this.props.user.id) {
      return (
        <div>
          <button
            className="ButtonPinkCenter"
            onClick={() => this.setState({ edit: true })}
          >
            EDIT TASK
          </button>
          <button
            className="ButtonPinkCenter"
            onClick={() => this.props.deleteJob(job.id)}
          >
            DELETE TASK
          </button>
        </div>
      );
    } else if (this.props.user.helping_jobs_ids.includes(job.id)) {
      return (
        <button
          className="ButtonPinkCenter"
          onClick={() => this.props.dropJob(job.id)}
        >
          DROP TASK
        </button>
      );
    } else {
      return (
        <button
          className="ButtonPinkCenter"
          onClick={() => this.props.acceptJob(job.id)}
        >
          ACCEPT TASK
        </button>
      );
    }
  };

  render() {
    return (
      <div>
        {this.renderJob(this.state.selectedJob)}
        {this.state.edit === false ? <MapContainer /> : null}
      </div>
    );
  }
}

export default withRouter(JobShow);
