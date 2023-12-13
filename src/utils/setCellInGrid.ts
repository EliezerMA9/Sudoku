import anime from "animejs";
import validateMove from "./validateMove";
import renderNotes from "./renderNotes";

const correctValue = (element: HTMLElement) =>
  anime({
    targets: element,
    scale: [1.2, 1],
    easing: "easeOutQuad",
    duration: 300,
  }).play();

const wrongValue = (element: HTMLElement) => {
  anime({
    targets: element,
    easing: "easeOutQuad",
    duration: 300,
    keyframes: [{ rotate: 7 }, { rotate: -7 }, { rotate: 0 }],
  }).play();
};

const setCellInGrid = (
  value: string,
  cell: string,
  currentBoard: number[][],
  solvedBoard: number[][],
  notesBoard: number[][][],
  tries: number,
  maxtries: number,
  note: boolean,
  setBoard: Function,
  setTriesByOperation: Function,
  setModalVisible: Function,
  setNotesBoard: Function
) => {
  const element = document.getElementById(cell);

  if (!element?.classList.contains("editable")) return;

  if (note && notesBoard.length !== 0) {
    let modifiedNotesBoard = JSON.parse(JSON.stringify(notesBoard));

    if (modifiedNotesBoard[Number.parseInt(cell[0]) - 1][Number.parseInt(cell[2]) - 1][Number.parseInt(value) - 1] === value) {
      modifiedNotesBoard[Number.parseInt(cell[0]) - 1][Number.parseInt(cell[2]) - 1][Number.parseInt(value) - 1] = "";
    } else {
      console.log(note && notesBoard.length !== 0);
      modifiedNotesBoard[Number.parseInt(cell[0]) - 1][Number.parseInt(cell[2]) - 1][Number.parseInt(value) - 1] = value;
    }

    setNotesBoard(modifiedNotesBoard);
    renderNotes(cell, value, undefined);
    return;
  }

  if (notesBoard.length === 0 || notesBoard === undefined) {
    initializeNotesBoard(setNotesBoard);
  }

  let modifiedGrid = currentBoard.map((innerArray) => [...innerArray]);
  let x = Number.parseInt(cell[0]) - 1;
  let y = Number.parseInt(cell[2]) - 1;
  let v = Number.parseInt(value);

  if (validateMove(solvedBoard, x, y, v)) {
    modifiedGrid[x][y] = v;
    setBoard(modifiedGrid);
    correctValue(element);

    renderNotes(cell, value, undefined, { cleanByPosition: true });
    return true;
  }

  wrongValue(element);

  if (tries === maxtries - 1) {
    // setModalVisible();
    setTriesByOperation("increment");
  } else {
    setTriesByOperation("increment");
  }

  return false;
};

const initializeNotesBoard = (setNotesBoard: Function) => {
  const threeDimensionalArray = new Array(9);

  for (let i = 0; i < 9; i++) {
    threeDimensionalArray[i] = new Array(9);

    for (let j = 0; j < 9; j++) {
      threeDimensionalArray[i][j] = new Array(9).fill(0);
    }
  }

  setNotesBoard(threeDimensionalArray);
};

export default setCellInGrid;
