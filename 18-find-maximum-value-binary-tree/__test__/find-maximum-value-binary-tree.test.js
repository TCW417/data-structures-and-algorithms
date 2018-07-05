'use strict';

import binaryTree from '../model/binary-tree';
import findMaximumValue from '../find-maximum-value-binary-tree';

// The tree is Judy's lab 15 model:
//                  1
//              2        3
//            6        4   5
//              7
//            8   9
//
// so BF traversal should return 1 2 3 6 4 5 7 8 9
describe('findMaximumValue test', () => {
  test('result should be 9', () => {
    const max = findMaximumValue(binaryTree.root);
    expect(max).toEqual(9);
  });
});
