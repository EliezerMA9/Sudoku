import renderNotesConfig from "../types/renderNotesConfig";

const renderNotes = (cell: string, value: string, notes?: number[][][], config?: renderNotesConfig) => {
  if (config?.clean) {
    cleanNotes();
    return;
  }

  if (config?.cleanByPosition) {
    cleanNotesByPosition(cell, value);
    return;
  }

  if (notes) {
    renderInitialNotes(notes);
  } else {
    let row = Number.parseInt(cell[0]) - 1;
    let col = Number.parseInt(cell[2]) - 1;
    let val = Number.parseInt(value);

    const element = document.getElementById(`note-${row + 1}-${col + 1}-${val}`) as HTMLElement;

    if (!element) {
      return;
    }

    if (element.innerHTML !== value) {
      element.innerHTML = value;
    } else {
      element.innerHTML = "";
    }
  }
};

const renderInitialNotes = (notes?: number[][][]) => {
  notes?.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      cell.forEach((value: any) => {
        if (value !== "" && value !== 0) {
          const element = document.getElementById(`note-${rowIndex + 1}-${cellIndex + 1}-${value}`) as HTMLElement;
          element.innerHTML = value;
        }
      });
    });
  });
};

const cleanNotes = () => {
  Array.from(document.getElementsByClassName("note-cell")).forEach((elem) => {
    if (elem.innerHTML !== "") {
      elem.innerHTML = "";
    }
  });
};

const cleanNotesByPosition = (cell: string, value: string) => {
  const row = Number.parseInt(cell[0]);
  const col = Number.parseInt(cell[2]);
  let nodeArray: HTMLElement[] = [];
  let element: HTMLElement;

  // Add all elements in box
  const subgridRow = Math.floor((row - 1) / 3) + 1;
  const subgridCol = Math.floor((col - 1) / 3) + 1;

  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      const absoluteRow = (subgridRow - 1) * 3 + i;
      const absoluteCol = (subgridCol - 1) * 3 + j;

      element = document.getElementsByClassName(`${absoluteRow}-${absoluteCol}`)[0] as HTMLElement;
      element.childNodes[1].childNodes.forEach((elem) => nodeArray.push(elem as HTMLElement));
    }
  }

  //Add all elements in row and column
  for (let index = 1; index < 10; index++) {
    element = document.getElementsByClassName(`${cell[0]}-${index}`)[0] as HTMLElement;
    element.childNodes[1].childNodes.forEach((elem) => nodeArray.push(elem as HTMLElement));

    element = document.getElementsByClassName(`${index}-${cell[2]}`)[0] as HTMLElement;
    element.childNodes[1].childNodes.forEach((elem) => nodeArray.push(elem as HTMLElement));
  }

  element = document.getElementsByClassName(cell)[0] as HTMLElement;
  element.childNodes[1].childNodes.forEach((elem) => {
    let element = elem as HTMLElement;
    element.innerHTML = "";
  });

  nodeArray.forEach((elem) => {
    if (elem.innerHTML === value) {
      elem.innerHTML = "";
    }
  });
};

export default renderNotes;
