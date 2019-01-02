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
    this.deletePage = this.deletePage.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        `/api/wiki/${this.props.match.params.slug}`
      );
      this.setState({ page: response.data });
    } catch (err) {
      console.error(err);
    }
  }

  async deletePage(slug) {
    try {
      const response = await axios.delete(`/api/wiki/${slug}`);
      this.props.history.push(`/wiki`);
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
          by <Link to={`/user/${page.authorId}`}>{page.author.name}</Link>
        </h3>
        <p className="page-content">{page.content}</p>
        <ul>
          {page.tags.map(pg => (
            <li key={pg}>{pg}</li>
          ))}
        </ul>
        <div>
          <button
            type="submit"
            className="edit-button"
            onClick={() => {
              this.props.history.push(`/wiki/edit/${page.slug}`);
            }}
          >
            Edit this page
          </button>
          <button
            type="button"
            className="delete-button"
            onClick={this.deletePage.bind(null, page.slug)}
          >
            Delete this page
          </button>
        </div>
      </div>
    );
  }
}
