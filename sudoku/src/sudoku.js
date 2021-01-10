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
      fixedCells: [[0,0],[1,1]],
      status: '',
    }
  }

  renderCell(val, row, col, isFixed){
    return (
      <Cell
        value={val}
        onClick={() => this.handleCellonClick(row, col)}
        isFixed={isFixed}
        key={[row,col]}
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

  isFixedCell(requestedLocation){
    var fixedCells = JSON.stringify(this.state.fixedCells);
    var requestedCell = JSON.stringify(requestedLocation);
    return (fixedCells.indexOf(requestedCell) !== -1);
  }


  render() {
    return (
      <div className='game'>
        <p className='status'>{this.state.status? this.state.status: ''}</p>
        <div className='board'>
          {this.state.squares.map((rowVals, rowNum) => (
            <div className={'band' + (rowNum%3 === 0 ? ' top-outline' : '')} >
              {rowVals.map((colVal, colNum) => (
                this.renderCell(colVal,rowNum, colNum, this.isFixedCell([rowNum,colNum]))
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Sudoku;