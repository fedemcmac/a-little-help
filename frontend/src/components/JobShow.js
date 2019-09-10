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

  // turnEditOff = data => {
  //   this.state.edit ?
  //   this.setState({ edit: false, selectedJob: data.job }) :
  //   this.setState({ selectedJob: data.job })
  // };

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
          <p>Summary: {job.summary}</p>
          <p>Category: {job.category}</p>
          <p>Address: {job.address}</p>
          <p>Owner: {job.owner.username}</p>
          <p>{job.description}</p>
          <p>
            If you have any questions email: {job.owner.email}
          </p>
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
        {this.state.selectedJob && this.state.edit === false && this.state.selectedJob.lat && this.state.selectedJob.lng? (
          <MapContainer
            coordinates={{
              lat: this.state.selectedJob.lat,
              lng: this.state.selectedJob.lng
            }}
          />
        ) : null}
      </div>
    );
  }
}

export default withRouter(JobShow);
