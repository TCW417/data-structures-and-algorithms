'use strict';

const LargestProduct = require('../array_adjacent_product');

describe('Tests for 03-array-adjacent-product functions', () => {
  const matrix1 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
  const matrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [9, 5, 9]];
  const matrix3 = [[4, 5, 6]];
  const matrix4 = [[1, 2], [3, 4], [5, 6], [7, 8]];
  const matrix5 = [[5], [6], [7]];
  const matrix6 = [[10]];

  test('largestProduct function tests', () => {
    expect(LargestProduct(matrix1)).toEqual(9);
    expect(LargestProduct(matrix2)).toEqual(81);
    expect(LargestProduct(matrix3)).toEqual(30);
    expect(LargestProduct(matrix4)).toEqual(56);
    expect(LargestProduct(matrix5)).toEqual(42);
    expect(LargestProduct(matrix6)).toEqual(0);
  });
});
