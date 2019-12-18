import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  function Square(props){
    return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
    )
  }
  class Board extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        squares: Array(9).fill(null),
        isX: true
      };
    }
    renderSquare(i) {
      //value只能是property，只有property可以传入
      return <Square 
        value={this.state.squares[i]}
        onClick = {() => this.handleClick(i)}
        />;
    }
    
    handleClick(i) {
      const squares = this.state.squares.slice(); 
      squares[i] = this.state.isX ? 'X': '0' 
      //用户的交互，触发会调函数，然后更新状态，状态的更新会触发页面的更新
      this.setState(
        {
          squares: squares,
          isX: !this.state.isX
        });
    }
    render() {
      let status;
      const winner = calculateWinner(this.state.squares);
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
      return (
        <div>
          {/**JSX里面的引用一定要用花括号 */}
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }