import React, { Component, PureComponent } from 'react';
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
      <button className="square" onClick={ this.props.myClickMethod }>
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

class Board extends PureComponent {
  renderSquare(i) {
    return (
      <Square
        myClickMethod={(e) => {this.props.boardClick(i)}}
        value={this.props.squares[i]}
      />
    );
  }

  render() {
    return (
      <div>
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

  constructor(props) {
    super(props);
    this.state = {
      history: [
        {squares: Array(9).fill(null)}
      ],
      xIsNext: true,
      stepNumber: 0,
    }
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }
   /*
  Since component STATE is considered private, we can’t update Board’s state directly from Square.
  The usual pattern here is pass down a function from Board to Square that gets called when the square is clicked.

  That's why we have a custom handleClick function to update the STATE
  */
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1); // slice [begin, end excluded]
    const current = history[history.length - 1];
    const squaresCopy = current.squares.slice(); // Immutability

    if (calculateWinner(squaresCopy) || squaresCopy[i]) {
      return;
    }

    squaresCopy[i] = this.state.xIsNext ? 'x' : 'o';
    this.setState({
      history: [...history, {squares: squaresCopy}],
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    // Show the moves
    const moves = history.map((_, idxMove) => {
      const message = idxMove ? 'Go to move #' + idxMove : 'Go to start';
      return (
        <li key={idxMove}>
          <button onClick={() => {this.jumpTo(idxMove)}}>{message}</button>
        </li>
      );
    });

    // Show next turn
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'x' : 'o');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            boardClick={(i) => {this.handleClick(i)}}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// Helpers
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


// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);