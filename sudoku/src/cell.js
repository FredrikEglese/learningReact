import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: this.props.onClick,
      suggestedValues: null,
    }
  }

  render() {
    return (
      <div className='cell' onClick={this.state.onClick}>
        <p className='cell-content'>
            {this.props.value}
        </p>
      </div>
    )
  }
}

export default Cell;
