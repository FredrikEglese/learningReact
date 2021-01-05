import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      counterValue: 0,
      text: {
          Increment: 'Increment',
          Reset: 'Reset'
      }
    }
    this.incrementCounter = this.incrementCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }


  incrementCounter(){
    this.setState({
      counterValue: this.state.counterValue +1,
    })
  }

  resetCounter(){
    this.setState({
      counterValue: 0,
    })
  }

  render() {
    return (
      <div>
        <p>Counter value: {this.state.counterValue}</p>

        <button onClick={this.incrementCounter}>
            {this.state.text.Increment}
        </button>

        <button onClick={this.resetCounter}>
            {this.state.text.Reset}
        </button>

      </div>
      
    );
  }
}

export default Counter;