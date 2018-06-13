'use strict';

const findMAP = (row, col, matrix) => {
  const centerVal = matrix[row][col];
  let prod;
  let result = 0;

  const outOfRange = (ar, ac) => 
    (ar < 0 || 
      ar > matrix.length - 1 || 
      ac < 0 || 
      ac > matrix[0].length - 1 || // this assumes matrix rows (inner arrays) all the same length
      (ar === row && ac === col)); // centerVal is itself "out of bounds"

  for (let drow = -1; drow < 2; drow++) {
    for (let dcol = -1; dcol < 2; dcol++) {
      prod = (outOfRange(row + drow, col + dcol)) ? 0 : centerVal * matrix[row + drow][col + dcol];
      result = Math.max(result, prod);
    }
  }
  return result;
};

const LargestProduct = module.exports = (matrix) => { /* eslint-disable-line */
  let maxAdjacentProduct = 0;
  for (let row = 0; row < matrix.length; row++) { // row 
    for (let col = 0; col < matrix[row].length; col++) { // column
      maxAdjacentProduct = Math.max(maxAdjacentProduct, findMAP(row, col, matrix));
    }
  }
  return maxAdjacentProduct;
};
