// home page
import React, { Component } from 'react';
import axios from 'axios';
import Write from './Write';
import PageList from './PageList';
import Users from './Users';
import SinglePage from './SinglePage';

export default class Wikistack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      users: []
    };
  }

  componentDidMount() {
    this.getPages();
  }

  async getPages() {
    // console.log('fetching');
    try {
      const { data } = await axios.get('/api/wiki');
      this.setState({ pages: data });
      // console.log('This is the State', this.state);
    } catch (err) {
      console.error(err);
    }
  }

  // this is a good place/time to make ajax/async requests, attach listeners, etc.
  // async componentDidMount() {
  //   try {
  //     const res = await axios.get('/api/wiki');
  //     const pages = res.data;
  //     console.log(pages);
  //   } catch (err) {
  //     console.log('There was a problem getting stuff!');
  //   }
  // const users = axios.get('/api/users');
  // const response = users.data
  // this.setState({ pages, response });
  // }

  // async addPage(page) {
  //   try {
  //     const newPage = await axios.post('/api/wiki', page);
  //     // this.setState({
  //     //   pages: [...this.state.pages, newPage]
  //     //   // users: [...this.state.users, newPage]
  //     // });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  // search()

  render() {
    return (
      <div className="container">
        <div className="page-title">Pages</div>
        <hr id="topline" />
        <div id="wiki-titles">
          <PageList pages={this.state.pages} />
          {/* <SinglePage pages={this.state.pages} /> */}
        </div>
      </div>
    );
  }
}
