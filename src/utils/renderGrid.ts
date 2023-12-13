const renderGrid = (currentBoard: number[][], initialBoard: number[][]) => {
  Array.from(document.getElementsByClassName("cell-button")).forEach((elem) => {
    elem.innerHTML = "";

    const firstIndex = +elem.classList[0].split("-")[0] - 1;
    const secondIndex = +elem.classList[0].split("-")[1] - 1;

    let value = currentBoard[firstIndex][secondIndex];

    if (value !== 0) {
      elem.innerHTML = value.toString();
    }
  });

  if (initialBoard.length !== 0) {
    initialBoard.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        const element = document.getElementById(`${rowIndex + 1}-${cellIndex + 1}`) as HTMLElement;
        element.classList.add("editable");

        if (cell !== 0) {
          element.classList.remove("editable");
          element.classList.add("initial");
        }
      });
    });
  }
};

export default renderGrid;
