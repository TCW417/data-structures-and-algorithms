'use strict';

const MAP = require('../array_adjacent_product');

describe('Tests for 03-array-adjacent-product functions', () => {
  const matrix = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
  test('findMAP function tests', () => {
    expect(MAP.findMAP(1, 1, matrix)).toEqual(6);
  });
});
