'use strict';

const MAP = module.exports = {};

MAP.findMAP = (x, y, matrix) => {
  const centerVal = matrix[x][y];
  let prod;
  let result = 0;

  const outOfRange = (ax, ay) => 
    (ax < 0 || 
      ax > matrix[0].length - 1 || 
      ay < 0 || 
      ay > matrix.length - 1 || 
      (ax === 0 && ay === 0));

  for (let dx = -1; dx < 2; dx++) {
    for (let dy = -1; dy < 2; dy++) {
      prod = (outOfRange(x + dx, y + dy)) ? 0 : centerVal * matrix[x + dx][y + dy];
      result = Math.max(result, prod);
    }
  }
  return result;
};

MAP.largestProduct = (matrix) => {
  console.log(matrix);
  let maxAdjacentProduct = 0;
  for (let i = 0; i < matrix.length; i++) { // row 
    console.log(matrix[i]);
    for (let j = 0; j < matrix[i].length; j++) { // column
      maxAdjacentProduct = Math.max(maxAdjacentProduct, MAP.findMAP(i, j, matrix));
    }
  }
  return maxAdjacentProduct;
};
