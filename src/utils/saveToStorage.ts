import isBoardEmpty from "./isBoardEmpty";

const saveToStorage = (
  board: number[][],
  solvedBoard: number[][],
  tries: number,
  maxTries: number,
  initialBoard: number[][],
  notesBoard: number[][][]
) => {
  if (!isBoardEmpty(board)) {
    localStorage.setItem("board", JSON.stringify(board));
    localStorage.setItem("solvedBoard", JSON.stringify(solvedBoard));
    localStorage.setItem("tries", JSON.stringify(tries));
    localStorage.setItem("maxTries", JSON.stringify(maxTries));
    localStorage.setItem("initialBoard", JSON.stringify(initialBoard));
    localStorage.setItem("notesBoard", JSON.stringify(notesBoard));
  }
};

const saveTimer = (timer: { seconds: number; minutes: number; hours: number }) => {
  localStorage.setItem("timer", JSON.stringify(timer));
};

export { saveToStorage, saveTimer };
