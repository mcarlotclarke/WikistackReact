// home page
import React, { Component } from 'react';
import axios from 'axios';
import PageList from './PageList';
import Users from './Users';

export default class Wikistack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      users: [],
      search: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  async componentDidMount() {
    // if we came in through the route with the slug:
    if (this.props.match.params.slug) {
      // 1. get page from slug axios.get
      const response = await axios.get(
        `/api/wiki/${this.props.match.params.slug}`
      );
      // 2. get first tag from page we get back
      const firstTag = response.data.tags[0];
      // 3. fake a search:
      // 3.a this.setState({search: page.tags[0]})
      this.setState({ search: firstTag });
      // 3.b call search function
      this.search();
    } else {
      //otherwise load all pages
      this.getPages();
      // this.getUsers();
    }
  }

  async getPages() {
    try {
      const { data } = await axios.get('/api/wiki');
      this.setState({ pages: data });
    } catch (err) {
      console.error(err);
    }
  }

  async search() {
    const response = await axios.get(
      `/api/wiki/search?search=${this.state.search}`
    );
    this.setState({ pages: response.data });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value // event.target === input in our form
    });
  }

  render() {
    return (
      <div className="container">
        <div className="page-title">Pages</div>
        <div>
          <input
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.search}>
            Search
          </button>
        </div>
        <hr id="topline" />
        <div id="wiki-titles">
          <PageList pages={this.state.pages} />
          {/* <Users users={this.state.users} /> */}
        </div>
      </div>
    );
  }
}
