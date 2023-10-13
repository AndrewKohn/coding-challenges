function isSolved(board) {
  for (let row = 0; row < board.length; row++) {
    for (let tile = 0; tile < board[row].length; tile++) {
      if (board[row][tile] !== 0) {
        if (
          tile === 1 &&
          board[row][tile - 1] === board[row][tile] &&
          board[row][tile + 1] === board[row][tile]
        )
          // Check horizontal
          return board[row][tile];

        // check vertical
        if (
          row === 1 &&
          board[row - 1][tile] === board[row][tile] &&
          board[row + 1][tile] === board[row][tile]
        )
          return board[row][tile];

        // check diagonals
        if (row === 1 && tile === 1) {
          // \ diagonal check
          if (
            board[row - 1][tile - 1] === board[row][tile] &&
            board[row + 1][tile + 1] === board[row][tile]
          )
            return board[row][tile];

          // / diagonal check
          if (
            board[row - 1][tile + 1] === board[row][tile] &&
            board[row + 1][tile - 1] === board[row][tile]
          )
            return board[row][tile];
        }
      }
    }
  }

  return board.filter(row => row.includes(0)).length === 0 ? 0 : -1;
}

console.log(
  isSolved([
    [0, 0, 0],
    [0, 1, 2],
    [1, 1, 0],
  ])
);

console.log(
  isSolved([
    [2, 0, 2],
    [2, 2, 1],
    [1, 1, 2],
  ])
);
