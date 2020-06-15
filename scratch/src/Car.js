import React, { Component } from 'react';

class Car extends Component {
    constructor(props){
      super(props);
      this.state = {
        color: this.props.color ? this.props.color : "Red",
        model: this.props.model ? this.props.model : "Prius",
      }
    }

    changeColor = () => {
        this.setState({color:"BLACK"})
    }

    render() {
      return (
        <div id="car">
          <button type="button" onClick={this.changeColor}>Change Color</button>
          <h2> I am a {this.state.model} in {this.state.color}</h2>
        </div>
      )
    }
  }

export default Car;