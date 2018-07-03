'use strict';

import binaryTree from '../model/binary-tree';
import breadthFirstTraversal from '../breadth-first-traversal';

// The tree is Judy's lab 15 model:
//                  1
//              2        3
//            6        4   5
//              7
//            8   9
//
// so BF traversal should return 1 2 3 6 4 5 7 8 9
describe('breadthFirstTraversal test', () => {
  test('Not sure what to expect...', () => {
    let s = '';
    breadthFirstTraversal(binaryTree.root, (nodeValue) => { 
      s += `${nodeValue} `; 
    });
    expect(s.trim()).toEqual('1 2 3 6 4 5 7 8 9');
  });
});
