import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('/api/user');
      console.log(data);
      this.setState({ users: data });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <div key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </div>
        ))}
      </div>
    );
  }
}

// const User = props => {
//   return (
//     <div>
//       {props.users.map(user => (
//         <div key={user.id}>
//           <Link to={`/wiki/${user.id}`}>{user.name}</Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default User;
