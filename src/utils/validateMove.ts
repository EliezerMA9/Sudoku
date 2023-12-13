type board = number[][];

function isValidMove(solvedBoard: board, row: number, col: number, num: number): boolean {
  return solvedBoard[row][col] === num;
}

export default isValidMove;
