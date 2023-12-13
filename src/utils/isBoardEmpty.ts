const isBoardEmpty = (arr: number[][]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
};

export default isBoardEmpty;
