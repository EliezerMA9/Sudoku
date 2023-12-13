const getHint = (currentBoard: number[][], solvedBoard: number[][], setBoard: Function) => {
  const zeroPositions = [];
  for (let i = 0; i < currentBoard.length; i++) {
    for (let j = 0; j < currentBoard[i].length; j++) {
      if (currentBoard[i][j] === 0) {
        zeroPositions.push({ x: i, y: j });
      }
    }
  }

  const randomIndex = Math.floor(Math.random() * zeroPositions.length);
  const { x, y } = zeroPositions[randomIndex];

  let modifiedBoard = JSON.parse(JSON.stringify(currentBoard));
  modifiedBoard[x][y] = solvedBoard[x][y];

  setBoard(modifiedBoard);
};

export default getHint;
