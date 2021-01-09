import React, { Component } from 'react';
import Users from './Users';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return ( 
     <Users />
    );
  }
}

export default App;