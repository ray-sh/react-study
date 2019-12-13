import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Square extends React.Component {
    constructor(props){
      super(props);
      //state就是一个kv
      this.state = {
        value: null,
        name: 'square'
      }
    }
    render() {
      return (
        <button className="square" 
          onClick={() =>
            //状态的更新就是传入一个新的kv
            this.setState({value: 'X'})}>
          {/*square要显示的内容*/}
          {this.state.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      //value只能是property，只有property可以传入
      return <Square value={i}/>;
    }
  
    render() {
      const status = 'Next player: X';
  
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
  