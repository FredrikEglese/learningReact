import React from 'react';
import Cell from './cell';

import {getNewProlem} from './problemGenerator';

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
      selectedCell: [null, null],
    }

    this.handleNumPress = this.handleNumPress.bind(this);
    this.newEasyBoard   = this.newEasyBoard.bind(this);
    this.newMediumBoard = this.newMediumBoard.bind(this);

  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleNumPress);
  }

  renderCell(cell, row, col) {
    var isSelected = JSON.stringify(this.state.selectedCell) === JSON.stringify([row,col]);
    if(!isSelected){
      var isHighligted = (this.state.selectedCell[0] === row) | (this.state.selectedCell[1] === col);
    }
    
    return (
      <Cell
        value={cell[1]}
        onClick={() => this.handleCellonClick(row, col)}
        isFixed={cell[0]}
        isSelected={isSelected}
        isHighligted={isHighligted}
        row={row}
        col={col}
        key={[row,col]}
      />
    )
  }

  handleCellonClick(row, col) {
    this.setState({selectedCell: [row, col]});
  }

  handleNumPress(e) {
    if(e.keyCode < 48 |
      e.keyCode > 57 |
      this.state.selectedCell[0] === null|
      this.state.selectedCell[1] === null){
      return;
    }

    this.setCellValue(
      this.state.selectedCell[0],
      this.state.selectedCell[1],
      e.keyCode - 48)

  }

  newEasyBoard() {
    this.setState({
      squares: getNewProlem('easy'),
      selectedCell: [null, null],
    })
  }

  newMediumBoard() {
    this.setState({
      squares: getNewProlem('medium'),
      selectedCell: [null, null],
    })
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

  completeStatus(){
    var flattenedCells = this.state.squares.slice().flat(1);
    
    if(flattenedCells.filter(cell => cell[1] === 0).length){
      return 'Sudoku!';
    }

    for(var i = 0; i < 9; i++){
      var thisRow = this.state.squares[i];
      var thisCol = this.getCol(i);
      var thisSquare = this.getSquareValues(i);

      if (!this.isArrayValid(thisRow) || !this.isArrayValid(thisCol || !this.isArrayValid(thisSquare))){
        return 'Something not quite right...';
      }
    }
    return 'Winner! Well done!';
  }

  render() {
    var status = this.completeStatus();

    return (
      <div className='game'>
        <h2 className='status'>{status}</h2>
        
        <div className='board'>
          {this.state.squares.map((rowVals, rowNum) => (
            <div className={'band'} >
              {rowVals.map((cell, colNum) => (
                this.renderCell(cell, rowNum, colNum)
              ))}
            </div>
          ))}
        </div>

        <div className='pt-3'>
          <button type='button' className='btn btn-outline-primary btn-lg btn-block' onClick={this.newEasyBoard}>New Easy Board</button>
          <button type='button' className='btn btn-outline-primary btn-lg btn-block' onClick={this.newMediumBoard}>New Medium Board</button>
        </div>
      </div>
    );
  }
}

export default Sudoku;