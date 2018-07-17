import React from 'react'
import Cell from './Cell.jsx'

class TicTacToe extends React.Component {
  initialState = {
    isXturn: true,
    result: Array(9).fill(null),
  }

  state = this.initialState

  handleClick(i) {
    const result = [...this.state.result]
    result[i] = this.state.isXturn ? 'X' : 'O'

    this.setState({
      result,
      isXturn: !this.state.isXturn,
    })
  }

  didSomeoneWin = () => {
    const { result } = this.state

    // Check if some winning position combination contains the same values
    return winningPositions.some(
      ([a, b, c]) =>
        result[a] && result[a] === result[b] && result[a] === result[c]
    )
  }

  handleRestart = () => {
    this.setState({ ...this.initialState })
  }

  render() {
    const { result, isXturn } = this.state
    const gameEnded = this.didSomeoneWin()
    const status = gameEnded
      ? `Player ${isXturn ? 'O' : 'X'} won!`
      : `Next player: ${isXturn ? 'X' : 'O'}`

    return (
      <React.Fragment>
        <h3>{status}</h3>
        <div className="TicTacToe">
          {result.map((_, i) => (
            <Cell
              key={i}
              value={result[i]}
              disabled={gameEnded}
              onClick={() => this.handleClick(i)}
            />
          ))}
        </div>
        {gameEnded && (
          <button onClick={this.handleRestart}>Play again!</button>
        )}
      </React.Fragment>
    )
  }
}

// is there a better way to detect a winner in TicTacToe?
const winningPositions = [
  // rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // cols
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal
  [0, 4, 8],
  [2, 4, 6],
]

export default TicTacToe
