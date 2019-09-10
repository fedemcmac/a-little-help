import React, { Component } from "react";
import Header from "./Header";
import LocationSearchInput from "./LocationSearchInput";

class JobForm extends Component {
  state = {
    title: "",
    summary: "",
    category: "",
    description: "",
    address: "",
    id: null
  };

  updateState = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateAddressState = value => {
    this.setState({ address: value })
  }

  componentDidMount() {
    if (this.props.jobToEdit) {
      this.setState({
        title: this.props.jobToEdit.title,
        summary: this.props.jobToEdit.summary,
        category: this.props.jobToEdit.category,
        description: this.props.jobToEdit.description,
        id: this.props.jobToEdit.id
      });
    }
  }

  render() {
    return (
      <div className="scrollable">
        <Header
          title={this.props.jobToEdit ? "Edit task" : "Create new task"}
        />
        <br />
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props
              .submit({ ...this.state })
              .then(data => this.props.turnEditOff(data));
            this.setState({
              title: "",
              summary: "",
              category: "",
              description: "",
              address: "",
              id: null
            });
          }}
        >
          <label className="plainText">Task title: </label>
          <br />
          <input
            className="topMargin"
            placeholder="Title"
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.updateState(e)}
          />
          <br />
          <label className="plainText">Task summary: </label>
          <br />
          <input
            className="topMargin"
            placeholder="Short description"
            type="text"
            name="summary"
            value={this.state.summary}
            onChange={e => this.updateState(e)}
          />
          <br />
          <label className="plainText">Category:</label>
          <div className="arrowContainer">
            <i className="fas fa-sort-down"></i>
            <select
              name="category"
              value={this.state.category}
              onChange={e => this.updateState(e)}
            >
              <option value="N/A">N/A</option>
              <option value="Remote">Remote</option>
              <option value="Misc">Misc</option>
              <option value="Physically demanding">Physically demanding</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Indoor">Indoor</option>
              <option value="Animals">Animals</option>
              <option value="Elderly">Elderly</option>
              <option value="Children">Children</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <br />
          <label className="plainText">
            {" "}
            Describe the help you need here:{" "}
          </label>
          <textarea
            className="textArea"
            name="description"
            value={this.state.description}
            onChange={e => this.updateState(e)}
          />
          <br />
          <label className="plainText">
            Location:
          </label>
          <LocationSearchInput handleChange={this.updateAddressState} addressState={this.state.address} />
          <button className="ButtonPinkCenter">
            {this.props.jobToEdit ? "EDIT TASK" : "CREATE TASK"}
          </button>
        </form>
      </div>
    );
  }
}
export default JobForm;
