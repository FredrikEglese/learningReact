import React from 'react';
import Cell from './cell'

class Sudoku extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
        Array(9).fill(null),
      ],
    }
  }

  renderCell(val, row, col){
    return (
      <Cell
        value={val}
        onClick={() => this.handleCellonClick(row, col)}
      />
    )
  }

  handleCellonClick(row, col){
    if (this.state.squares[row][col] === 9){
      this.setCellValue(row, col, null);
    } else {
      this.setCellValue(row, col, this.state.squares[row][col]+1);
    }
  }

  setCellValue(row, col, value){
    let tempSquares = this.state.squares.slice();
    tempSquares[row][col] = value;
    this.setState({
      squares: tempSquares,
    })
  }

  render() {
    return (
      <div className='board'>
        {this.state.squares.map((rowVals, rowNum) => (
          <div className='band'>
            {rowVals.map((colVal, colNum) => (
              this.renderCell(colVal,rowNum, colNum)
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Sudoku;