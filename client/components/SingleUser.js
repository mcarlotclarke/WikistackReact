import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SingleUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        pages: [
          {
            title: ''
          }
        ]
      }
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        `/api/user/${this.props.match.params.id}`
      );
      this.setState({ user: response.data });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const user = this.state.user;
    return (
      <div>
        <h3>Pages written by {user.name}</h3>
        <ul>
          {user.pages.map((page, index) => (
            <li key={index}>
              <Link to={`/wiki/${page.slug}`}>{page.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
