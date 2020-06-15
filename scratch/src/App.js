import React, { Component } from 'react';
import './App.css';
import Car from './Car.js';

class App extends Component {
  render() {
    return (
      <Garage />
    );
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to my garage!</h1>
        <Car model="Monster Truck"/>
      </div>
    )
  }
}

export default App;
