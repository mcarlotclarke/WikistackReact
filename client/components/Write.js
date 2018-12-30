import React, { Component } from 'react';
// import axios from 'axios';

export default class Write extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      title: '',
      content: '',
      status: '',
      tags: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value // event.target === input in our form
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.props.addPage(this.state);
    this.setState({
      // this is where/how we clear the state after submit
      name: '',
      email: '',
      title: '',
      content: '',
      status: '',
      tags: []
    });
  }

  render() {
    return (
      // prettier-ignore
      <form onSubmit={this.handleSubmit}>
            <div className="page-title">Add Page</div>
            <hr id="topline" />
        <label>
          Author's name
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Author's email
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
        </label>
        <label>
          Title
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label>
          Content
          <input type="text" name="content" value={this.state.content} onChange={this.handleChange} />
        </label>
        <div className="custom-select">
          <select value={this.state.status} onChange={this.handleChange}>
            <option value="open">open</option>
            <option value="close">close</option>
          </select>
        </div>
        <label>
          Tags
          <input type="text" name="tags" value={this.state.tags} onChange={this.handleChange} />
        </label>
        <button id="submit" type="submit">Submit</button>
      </form>
    );
  }
}
