import React, { Component } from "react";
import Header from "./Header";
import LocationSearchInput from "./LocationSearchInput";

class JobForm extends Component {
  state = {
    title: "",
    summary: "",
    category: "N/A",
    description: "",
    address: "",
    lat: null,
    lng: null,
    id: null
  };

  updateState = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateAddressState = value => {
    this.setState({ address: value });
  };

  updateCoordinates = latLng => {
    console.log(latLng);
    this.setState({ lat: latLng.lat, lng: latLng.lng });
  };

  componentDidMount() {
    if (this.props.jobToEdit) {
      this.setState({
        title: this.props.jobToEdit.title,
        summary: this.props.jobToEdit.summary,
        category: this.props.jobToEdit.category,
        description: this.props.jobToEdit.description,
        address: this.props.jobToEdit.address,
        lat: this.props.jobToEdit.lat,
        lng: this.props.jobToEdit.lng,
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
            this.props.submit({ ...this.state }).then(data => {
              if (this.props.jobToEdit) {this.props.turnEditOff(data)}
            });
            this.setState({
              title: "",
              summary: "",
              category: "N/A",
              description: "",
              address: "",
              lat: null,
              lng: null,
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
            maxlength="50" ////////////////////////////////////////////////////////////////MAXLENGTH/////////////////////////////
            required
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
            required
          />
          <br />
          <label className="plainText">Category:</label>
          <div className="iconContainer">
            <i className="fas fa-sort-down"></i>
            <select
              name="category"
              value={this.state.category}
              onChange={e => this.updateState(e)}
            >
              <option value="N/A">Choose a category</option>
              <option value="Remote">Remote</option>
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Animals">Animals</option>
              <option value="Children">Children</option>
              <option value="Elderly">Elderly</option>
              <option value="Physically demanding">Physically demanding</option>
              <option value="Misc">Misc</option>
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
            required
          />
          <br />
          <label className="plainText">Location:</label>
          <LocationSearchInput
            handleChange={this.updateAddressState}
            addressState={this.state.address}
            updateCoordinates={this.updateCoordinates}
          />
          <button className="ButtonPinkCenter">
            {this.props.jobToEdit ? "EDIT TASK" : "CREATE TASK"}
          </button>
        </form>
      </div>
    );
  }
}
export default JobForm;
