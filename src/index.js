import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends Component {

    /*
  Optimizing Performance
  Everytime the state change, it rerender components childs
  But if the state of a child didnt change, why rerender it ?
  */
  shouldComponentUpdate(nextProps) {
    return this.props.value !== nextProps.value;
  }

  render() {
    return (
      <button className="square" onClick={() => { this.props.myClickMethod() }}>
        {this.props.value}
      </button>
    );
  }
}

/*
React supports a simpler syntax called functional components for component types
like Square that only consist of a render method.
 */
/*
function Square(props) {
  return (
    <button className="square" onClick={props.myClickMethod }>
      {props.value}
    </button>
  );
}
*/

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  renderSquare(i) {
    return (
      <Square
        myClickMethod={() => { this.handleClick(i) }}
        value={this.state.squares[i]}
      />
    );
  }

  /*
  Since component STATE is considered private, we can’t update Board’s state directly from Square.
  The usual pattern here is pass down a function from Board to Square that gets called when the square is clicked.

  That's why we have a custom handleClick function to update the STATE
  */
  handleClick(i) {
    const squaresCopy = this.state.squares.slice(); // Immutability
    squaresCopy[i] = this.state.xIsNext ? 'x' : 'o';
    this.setState({
      squares: squaresCopy,
      xIsNext: !this.state.xIsNext
    });
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
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

class Game extends Component {
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
