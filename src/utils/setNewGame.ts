import generateSudoku from "./generateSudoku";

const setNewGame = (difficulty: string, setBoard: Function, setSolvedBoard: Function, setInitialBoard: Function, setNotesBoard: Function) => {
  const modes: { [key: string]: number } = {
    easy: 40,
    medium: 50,
    hard: 60,
  };

  let sudoku = generateSudoku(modes[difficulty], setSolvedBoard);

  setInitialBoard(sudoku);
  setBoard(sudoku);
  setNotesBoard([]);
};

export default setNewGame;
