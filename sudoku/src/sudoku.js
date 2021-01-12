import React from 'react';
import Cell from './cell'

class Sudoku extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      squares: [
        Array(9).fill([false,0]),
        Array(9).fill([false,0]),
        Array(9).fill([false,0]),
        Array(9).fill([false,0]),
        Array(9).fill([false,0]),
        Array(9).fill([false,0]),
        Array(9).fill([false,0]),
        Array(9).fill([false,0]),
        Array(9).fill([false,0]),
      ],
    }
  }

  renderCell(cell, row, col){
    return (
      <Cell
        value={cell[1]}
        onClick={() => this.handleCellonClick(row, col)}
        isFixed={cell[0]}
        key={[row,col]}
      />
    )
  }

  handleCellonClick(row, col){
    // At the moment, when a cell is clicked it will simply increment
    // TODO: onClick highlights, then able to key in number
    this.setCellValue(row, col, ((this.state.squares[row][col][1]+1) % 9));
  }

  setCellValue(row, col, value) {
    let tempSquares = this.state.squares.slice();
    tempSquares[row][col] = [false, value];
    this.setState({
      squares: tempSquares,
    })
  }

  checkIfComplete(){
    var flattenedCells = this.state.squares.slice().flat(1)

    console.log(flattenedCells.filter(cell => cell[1] !== 0).length)
    if(flattenedCells.filter(cell => cell[1] === 0).length){
      return false;
    }

    // TODO: Check if this is a valid solution

  }

  render() {
    var status = '';
    if (this.checkIfComplete()){
      status = 'Winner!'
    }

    return (
      <div className='game'>
        <p className='status'>{status}</p>
        <div className='board'>
          {this.state.squares.map((rowVals, rowNum) => (
            <div className={'band' + (rowNum%3 === 0 ? ' top-outline' : '')} >
              {rowVals.map((cell, colNum) => (
                this.renderCell(cell, rowNum, colNum)
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Sudoku;