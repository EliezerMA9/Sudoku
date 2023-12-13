const isBoardComplete = (board: number[][]) => {
  for (const row of board) {
    for (const item of row) {
      if (item === 0) {
        return false;
      }
    }
  }
  return true;
};

export default isBoardComplete;
