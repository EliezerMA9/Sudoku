// import { RootState } from "../state/store";
// import { useSelector, useDispatch } from "react-redux";
// import { setData } from "../state/data/dataSlice";

type SudokuGrid = number[][];

interface Position {
  row: number;
  col: number;
}

function generateSudoku(difficulty: number, setSolvedBoard: Function): SudokuGrid {
  let sudoku: SudokuGrid = Array.from({ length: 9 }, () => Array(9).fill(0));

  // Fill the diagonal boxes
  for (let i = 0; i < 9; i += 3) {
    fillBox(sudoku, i, i);
  }

  // Solve the rest of the puzzle
  solveSudoku(sudoku);

  setSolvedBoard(JSON.parse(JSON.stringify(sudoku)));

  // Remove some numbers to create a puzzle
  removeNumbers(sudoku, difficulty);

  return sudoku;
}

function fillBox(sudoku: SudokuGrid, row: number, col: number): void {
  const nums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      sudoku[row + i][col + j] = nums.pop() as number;
    }
  }
}

function shuffle(arr: number[]): number[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

function solveSudoku(sudoku: SudokuGrid): boolean {
  const empty = findEmptyPosition(sudoku);
  if (!empty) {
    return true; // Solved
  }

  const { row, col } = empty;

  for (let num = 1; num <= 9; num++) {
    if (isValidMove(sudoku, row, col, num)) {
      sudoku[row][col] = num;

      if (solveSudoku(sudoku)) {
        return true; // Solved
      }

      sudoku[row][col] = 0; // Backtrack
    }
  }

  return false; // No solution found
}

function isValidMove(sudoku: SudokuGrid, row: number, col: number, num: number): boolean {
  return !usedInRow(sudoku, row, num) && !usedInCol(sudoku, col, num) && !usedInBox(sudoku, row - (row % 3), col - (col % 3), num);
}

function usedInRow(sudoku: SudokuGrid, row: number, num: number): boolean {
  return sudoku[row].includes(num);
}

function usedInCol(sudoku: SudokuGrid, col: number, num: number): boolean {
  return sudoku.map((row) => row[col]).includes(num);
}

function usedInBox(sudoku: SudokuGrid, startRow: number, startCol: number, num: number): boolean {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (sudoku[startRow + i][startCol + j] === num) {
        return true;
      }
    }
  }
  return false;
}

function findEmptyPosition(sudoku: SudokuGrid): Position | null {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (sudoku[i][j] === 0) {
        return { row: i, col: j };
      }
    }
  }
  return null;
}

function removeNumbers(sudoku: SudokuGrid, count: number): void {
  while (count > 0) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);

    if (sudoku[row][col] !== 0) {
      sudoku[row][col] = 0;
      count--;
    }
  }
}

export default generateSudoku;
