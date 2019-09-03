import React, { Component, useState } from "react";
import Header from "./Header";
import UserForm from "./UserForm";

class JobForm extends Component {
  // const [title, setTitle] = useState('')
  // const [summary, setSummary] = useState('')
  // const [category, setCategory] = useState('Other')
  // const [description, setDescription] = useState('')

  state = {
    title: "",
    summary: "",
    category: "",
    description: "",
    id: null
  };

  updateState = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    if (this.props.jobToEdit) {
      this.setState({
        title: this.props.jobToEdit.title,
        summary: this.props.jobToEdit.summary,
        category: this.props.jobToEdit.category,
        description: this.props.jobToEdit.description,
        id: this.props.jobToEdit.id
      });
      console.log(this.props.jobToEdit);
    }
  }

  render() {
    return (
      <div>
        {/* <Header title="Create new task"/> */}
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.submit({ ...this.state });
            this.setState({
              title: "",
              summary: "",
              category: "",
              description: "",
              id: null
            });
          }}
        >
          <label>Title:</label>
          <input
            placeholder="Title"
            type="text"
            name="title"
            value={this.state.title}
            onChange={e => this.updateState(e)}
          />
          <br />
          <label>Summary:</label>
          <input
            placeholder="Summary"
            type="text"
            name="summary"
            value={this.state.summary}
            onChange={e => this.updateState(e)}
          />
          <br />
          <label>Category:</label>
          <select
            placeholder="Email"
            type="email"
            name="category"
            value={this.state.category}
            onChange={e => this.updateState(e)}
          >
            <option value="Remote">Remote</option>
            <option value="Other">Misc</option>
            <option value="Physically demanding">Physically demanding</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Indoor">Indoor</option>
            <option value="Animals">Animals</option>
            <option value="Elderly">Elderly</option>
            <option value="Children">Children</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <label>Description:</label>
          <textarea
            name="description"
            value={this.state.description}
            onChange={e => this.updateState(e)}
          />
          <br />
          <button>{this.props.jobToEdit ? "EDIT JOB" : "CREATE JOB"}</button>
        </form>
      </div>
    );
  }
}
export default JobForm;
