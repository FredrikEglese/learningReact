import React, { Component } from 'react';

class Users extends Component {
  constructor(props){
    super(props);
    this.state = {
      userData: '',
      isLoaded: false,
    }
  }

  componentDidMount = () => {
    this.fetchUsers();
  }

  fetchUsers = () => {
    this.setState({loading: true});
    const apiUrl = 'https://api.mocki.io/v1/b043df5a';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          userData: data,
          isLoaded: true,
        });
      });
  }

  render() {
    var { isLoaded, userData } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div class='user-list'>
          {userData.map(user => (
            <div class='card'>
              <div class='card-body'>

                <h3 class='card-title'>{user.name}</h3>
                <p class='card-text'>Location: {user.city}</p>
              </div>
            </div>
          ))}
        </div>
     
      );
    }
  }
}

export default Users;