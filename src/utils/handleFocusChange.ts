const handleFocusChange = (currentCell: string) => {
  if (!currentCell) return;

  // console.log(currentCell);

  //Remove all focus of all cells
  removeAllFocus(currentCell);

  //Highlight current cell
  document.getElementById(currentCell)?.classList.add("selected");

  //Highlight all cells in the same row
  highlightAllByRow(currentCell);

  //Highlight all cells in the same column
  highlightAllByColumn(currentCell);

  //Highlight all cells in the same box
  highlightAllByBox(currentCell);

  //Highlight all cells with the same value
  higlightAllByValue(currentCell);
};

const highlightAllByBox = (currentCell: string) => {
  const subgridRow = Math.floor((Number.parseInt(currentCell[0]) - 1) / 3) + 1;
  const subgridCol = Math.floor((Number.parseInt(currentCell[2]) - 1) / 3) + 1;

  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      const absoluteRow = (subgridRow - 1) * 3 + i;
      const absoluteCol = (subgridCol - 1) * 3 + j;

      const tempElem = document.getElementsByClassName(`${absoluteRow}-${absoluteCol}`)[0] as HTMLElement;
      if (tempElem.classList.contains("same-axis")) {
        continue;
      } else {
        tempElem.classList.add("same-axis");
      }
    }
  }
};

const highlightAllByRow = (currentCell: string) => {
  for (let i = 1; i < 10; i++) {
    const tempElem = document.getElementsByClassName(`${currentCell[0]}-${i}`)[0] as HTMLElement;
    if (tempElem.classList.contains("same-axis")) {
      tempElem.classList.remove("same-axis");
    } else {
      tempElem.classList.add("same-axis");
    }
  }
};

const highlightAllByColumn = (currentCell: string) => {
  for (let i = 1; i < 10; i++) {
    const tempElem = document.getElementsByClassName(`${i}-${currentCell[2]}`)[0] as HTMLElement;
    if (tempElem.classList.contains("same-axis")) {
      tempElem.classList.remove("same-axis");
    } else {
      tempElem.classList.add("same-axis");
    }
  }
};

const higlightAllByValue = (currentCell: string) => {
  let value = document.getElementById(currentCell)?.innerHTML || "0";

  Array.from(document.getElementsByClassName("cell-button")).forEach((elem) => {
    if (elem.innerHTML === value && value !== "") {
      elem.classList.add("same-value");
    }
  });
};

const removeAllFocus = (currentCell: string) => {
  Array.from(document.getElementsByClassName("selected")).forEach((v) => {
    if (!v.classList.contains(currentCell)) {
      v.classList.remove("selected");
    }
  });

  Array.from(document.getElementsByClassName("same-axis")).forEach((elem) => {
    elem.classList.remove("same-axis");
  });

  Array.from(document.getElementsByClassName("same-value")).forEach((elem) => {
    elem.classList.remove("same-value");
  });
};

export default handleFocusChange;
