import React from 'react';
import ClassNames from 'classnames';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: this.props.onClick,
      suggestedValues: null,
    }
  }

  render() {
    var classNames = ClassNames({
      'cell': true,
      'fixed-cell': this.props.isFixed,
    })

    var onClick = this.props.isFixed ? null : this.state.onClick;
    var value = this.props.value ? this.props.value : null;

    return (
      <div className={classNames} onClick={onClick}>
        <p className='cell-content'>
            {value}
        </p>
      </div>
    )
  }
}

export default Cell;
