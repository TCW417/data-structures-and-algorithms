'use strict';

const MAP = module.exports = {};

MAP.findMAP = (x, y, matrix) => {
  const centerVal = matrix[x][y];
  const results = [];
  let prod;
  for (let dx = -1; dx < 2; dx++) {
    for (let dy = -1; dy < 2; dy++) {
      prod = centerVal * matrix[x + dx][y + dy];
      if (isNaN(prod)) prod = 0; /*eslint-disable-line*/
      results.push(prod);
    }
  }
  return Math.max.apply(null, results);
};
