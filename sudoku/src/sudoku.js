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
    this.setCellValue(row, col, ((this.state.squares[row][col][1]+1) % 10));
  }

  setCellValue(row, col, value) {
    let tempSquares = this.state.squares.slice();
    tempSquares[row][col] = [false, value];
    this.setState({
      squares: tempSquares,
    })
  }

  isArrayValid(line){
    const correctSequence = "[1,2,3,4,5,6,7,8,9]";
    return (JSON.stringify(line.map(x => x[1]).sort()) === correctSequence)
  }

  getCol(colNum){
    var collumn = [];
    for(var i = 0; i<this.state.squares.length; i++){
      collumn.push(this.state.squares[i][colNum]);
    }
    return collumn;
  }

  getSquareValues(squareNum){
    var valuesArray = [];
    var baseRow = Math.floor(squareNum / 3) * 3;
    var baseCol = (squareNum % 3) * 3;

    valuesArray.push(this.state.squares[baseRow].slice(baseCol, baseCol + 3));
    valuesArray.push(this.state.squares[baseRow + 1].slice(baseCol, baseCol + 3));
    valuesArray.push(this.state.squares[baseRow + 2].slice(baseCol, baseCol + 3));

    return valuesArray.flat(1);
  }


  checkIfComplete(){
    var flattenedCells = this.state.squares.slice().flat(1);
    
    if(flattenedCells.filter(cell => cell[1] === 0).length){
      return false;
    }

    for(var i = 0; i < 9; i++){
      var thisRow = this.state.squares[i];
      var thisCol = this.getCol(i);
      var thisSquare = this.getSquareValues(i);

      if (!this.isArrayValid(thisRow) || !this.isArrayValid(thisCol || !this.isArrayValid(thisSquare))){
        return false;
      }
    }
    return true;
  }

  render() {
    var status = '';
    if (this.checkIfComplete()){
      status = 'Winner!';
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