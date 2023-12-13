import handleFocusChange from "./handleFocusChange";
import setCellInGrid from "./setCellInGrid";

const handleKeyboard = (
  selected: string,
  board: number[][],
  solvedBoard: number[][],
  notesBoard: number[][][],
  e: KeyboardEvent,
  tries: number,
  maxtries: number,
  note: boolean,
  setSelected: Function,
  setBoard: Function,
  setTriesByOperation: Function,
  setModalVisible: Function,
  setNotesBoard: Function,
  toggleNotes: Function
) => {
  let cell = "";
  let value = "";
  let currentRow = Number.parseInt(selected[0]);
  let currentCol = Number.parseInt(selected[2]);

  if (e.key === "ArrowUp") {
    if (currentRow - 1 > 0) {
      cell = `${currentRow - 1}-${selected[2]}`;
    }
  } else if (e.key === "ArrowDown") {
    if (currentRow + 1 < 10) {
      cell = `${currentRow + 1}-${selected[2]}`;
    }
  } else if (e.key === "ArrowLeft") {
    if (currentCol - 1 > 0) {
      cell = `${selected[0]}-${currentCol - 1}`;
    }
  } else if (e.key === "ArrowRight") {
    if (currentCol + 1 < 10) {
      cell = `${selected[0]}-${currentCol + 1}`;
    }
  } else if (e.key === "w") {
    if (currentRow - 1 > 0) {
      cell = `${currentRow - 1}-${selected[2]}`;
    }
  } else if (e.key === "s") {
    if (currentRow + 1 < 10) {
      cell = `${currentRow + 1}-${selected[2]}`;
    }
  } else if (e.key === "a") {
    if (currentCol - 1 > 0) {
      cell = `${selected[0]}-${currentCol - 1}`;
    }
  } else if (e.key === "d") {
    if (currentCol + 1 < 10) {
      cell = `${selected[0]}-${currentCol + 1}`;
    }
  } else if (e.key === "1") {
    value = "1";
  } else if (e.key === "2") {
    value = "2";
  } else if (e.key === "3") {
    value = "3";
  } else if (e.key === "4") {
    value = "4";
  } else if (e.key === "5") {
    value = "5";
  } else if (e.key === "6") {
    value = "6";
  } else if (e.key === "7") {
    value = "7";
  } else if (e.key === "8") {
    value = "8";
  } else if (e.key === "9") {
    value = "9";
  } else if (e.key === "n") {
    toggleNotes();
  }

  if (cell !== "") {
    setSelected(cell);
    handleFocusChange(cell);
  }

  if (value !== "") {
    setCellInGrid(
      value,
      selected,
      board,
      solvedBoard,
      notesBoard,
      tries,
      maxtries,
      note,
      setBoard,
      setTriesByOperation,
      setModalVisible,
      setNotesBoard
    );
    handleFocusChange(selected);
  }

  return [cell, value];
};

export default handleKeyboard;
