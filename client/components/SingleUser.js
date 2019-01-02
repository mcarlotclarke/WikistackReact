import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SingleUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: ''
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
        <h2>Pages written by {user.name}</h2>
        {/* <ul>
          {user.tags.map(pg => (
            <li key={pg}>{pg}</li>
          ))}
        </ul> */}
      </div>
    );
  }
}
