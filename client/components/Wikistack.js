// home page
import React, { Component } from 'react';
import Write from './Write';
import axios from 'axios';

export default class Wikistack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      users: []
    };
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
  // getPages()

  render() {
    return (
      <div className="container">
        <div className="page-title">Index</div>
        <hr id="topline" />
      </div>
    );
  }
}
