import React, { Component } from 'react';
import axios from 'axios';

export default class SinglePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: {}
    };
  }

  async componentDidMount() {
    try {
      const storyResponse = await axios.get(
        `/api/wiki/${this.props.match.params.slug}`
      );
      this.setState({ page: storyResponse.data });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const page = this.state.page;

    return (
      <div>
        <h2>{page.title}</h2>
        <h3>by {page.author}</h3>
        <p className="page-content">{page.content}</p>
        <li>{page.tags}</li>
        {/* <p className="page-tags">{page.tags}</p> */}
      </div>
    );
  }
}
