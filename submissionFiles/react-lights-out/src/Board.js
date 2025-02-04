import { useState } from "react";
import "./Board.css";
import Cell from "./Cell";  // Assuming you have a `Cell` component

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());
  const [hasWon, setHasWon] = useState(false);

  /** Create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    for (let i = 0; i < nrows; i++) {
      let row = [];
      for (let j = 0; j < ncols; j++) {
        const cellVal = Math.random() < chanceLightStartsOn;  // Randomly lit or unlit
        row.push(cellVal);
      }
      initialBoard.push(row);
    }
    return initialBoard;
  }

  /** Check if the player has won */
  function checkWin() {
    for (let i = 0; i < nrows; i++) {
      for (let j = 0; j < ncols; j++) {
        if (board[i][j] === true) {
          return false;
        }
      }
    }
    return true;
  }

  /** Flip cells around a given cell */
  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      // Create a deep copy of the board
      const newBoard = oldBoard.map(row => [...row]);

      // Flip the clicked cell and its neighbors
      flipCell(y, x, newBoard);
      flipCell(y - 1, x, newBoard);  // Above
      flipCell(y + 1, x, newBoard);  // Below
      flipCell(y, x - 1, newBoard);  // Left
      flipCell(y, x + 1, newBoard);  // Right

      // Check if the player has won after flipping
      if (checkWin()) {
        setHasWon(true);
      }

      return newBoard;
    });
  }

  /** Render the board or a winning message */
  if (hasWon) {
    return <div className="Board-win-message">You won!</div>;
  }

  return (
    <table className="Board">
      <tbody>
        {board.map((row, y) => (
          <tr key={y}>
            {row.map((cell, x) => (
              <Cell
                key={`${y}-${x}`}
                isLit={cell}
                flipCellsAroundMe={() => flipCellsAround(`${y}-${x}`)}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Board;
