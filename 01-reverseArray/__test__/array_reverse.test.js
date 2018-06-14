'use strict';

const arrayReverse = require('../array_reverse');

describe('array_reverse tests', () => {
  test('testing various array lengths and contents', () => {
    expect(arrayReverse([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
    expect(arrayReverse([1, 2, 3])).toEqual([3, 2, 1]);
    expect(arrayReverse([1])).toEqual([1]);
    expect(arrayReverse(15)).toBeUndefined();
    expect(arrayReverse('stringValue')).toBeUndefined();
    expect(arrayReverse({ a: 1, b: 2 })).toBeUndefined();
    expect(arrayReverse(['fish', 1, 2, 'cats', 3])).toEqual([3, 'cats', 2, 1, 'fish']);
  });
});
