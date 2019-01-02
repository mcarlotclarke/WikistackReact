import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SinglePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: {
        author: {},
        tags: []
      }
    };
  }

  async componentDidMount() {
    try {
      const storyResponse = await axios.get(
        `/api/wiki/${this.props.match.params.slug}`
      );
      console.log('STORY RESPONSE', storyResponse);
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
        <h3>
          by <Link to={`/users/${page.authorId}`}>{page.author.name}</Link>
        </h3>
        <p className="page-content">{page.content}</p>
        <ul>
          {page.tags.map(pg => (
            <li key={pg}>{pg}</li>
          ))}
        </ul>
        {/* <p className="page-tags">{page.tags}</p> */}
      </div>
    );
  }
}
