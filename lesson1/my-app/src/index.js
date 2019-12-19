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
    
    renderSquare(i) {
      //value只能是property，只有property可以传入
      return <Square 
        value={this.props.squares[i]}
        onClick = {() => this.props.onClick(i)}
        />;
    }
    render() {
      
      return (
        <div>
          {/**JSX里面的引用一定要用花括号 */}
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
    //构造函数定义了如何初始化
    constructor(props){
      super(props)
      this.state = {
        history:[
          {
            squares: Array(9).fill(null)
          }
        ],
        isX: true
      }
    }
    //handle*函数定义如何处理UI的事件
    handleClick(i) {
      const history = this.state.history;
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.isX ? 'X': '0' 
      //用户的交互，触发会调函数，然后更新状态，状态的更新会触发页面的更新
      this.setState(
        {
          history: history.concat([{
            squares: squares,
          }]),
          isX: !this.state.isX
        });
    }
    //render定义如何构造页面，以及如何用把state和页面内容连接起来
    render() {
      const history = this.state.history
      const current = history[history.length-1]
      const winner = calculateWinner(current.squares)
      
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.isX ? 'X' : 'O');
      }
      return (
        <div className="game">
          <div className="game-board">
            <Board squares={current.squares} onClick={(i) => this.handleClick(i)}/>
          </div>
          <div className="game-info">
            <div>{status}</div>
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