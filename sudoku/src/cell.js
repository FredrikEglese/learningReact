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
      <div className={(this.props.isFixed?'fixed-cell cell':'cell')} onClick={this.props.isFixed?null:this.state.onClick}>
        <p className='cell-content'>
            {this.props.value ? this.props.value : null}
        </p>
      </div>
    )
  }
}

export default Cell;
