class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
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


String given = "(((()";
String index = "";
int validNumber = 0;
// find a string with index number of all the left parenthese in the given string
for (int i = 0; i < given.length(); i++) {
  if (given.charAt(i) == '(') {
    index += i;
  }
// after this, I suppose to get string index = "0123"
}
for (int i = 0; i < given.length - 1; i++) {
  // check if the one with the left parentheses is followed by a parentheses that is not left one.
  if (index.indexOf(i) != -1) {
    if (index.indexOf(i + 1) == -1) {
    //if (index.charAt(i) == i && index.charAt(i + 1) != i + 1) {
      validNumber += 2;
    }
  }
}
return validNumber;


/*
 * This is the testing area
 */
String test0 = "(((()"
// index = "0123"
// index.length = 4
String test1 = "()()"
// index = "02"
// index.length = 2

String test2 = "(())"
// index = "01"
String test3 = "((())"
count the left and the right
