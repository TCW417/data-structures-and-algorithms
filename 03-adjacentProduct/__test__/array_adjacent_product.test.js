'use strict';

const MAP = require('../array_adjacent_product');

describe('Tests for 03-array-adjacent-product functions', () => {
  const matrix1 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
  const matrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [9, 5, 9]];
  const matrix3 = [[4, 5, 6]];
  const matrix4 = [[1, 2], [3, 4], [5, 6], [7, 8]];
  test('findMAP tests', () => {
    expect(MAP.findMAP(3, 2, matrix2)).toEqual(81);
  });

  test.skip('largestProduct function tests', () => {
    expect(MAP.largestProduct(matrix1)).toEqual(9);
    // expect(MAP.largestProduct(matrix2)).toEqual(81);
    expect(MAP.largestProduct(matrix3)).toEqual(30);
    expect(MAP.largestProduct(matrix4)).toEqual(56);
    // expect(MAP.findMAP(2, 2, matrix2)).toEqual(81);
  });
});
