'use strict';

import binaryTree from '../model/binary-tree';
import fizzBuzzTree from '../fizzbuzztree';


describe('fizzBuzzTree test', () => {
  test('Not sure what to expect...', () => {
    console.log('Pre fizzbuzz:');
    console.log(JSON.stringify(binaryTree, null, 2));
    let s = '';
    fizzBuzzTree(binaryTree.root, (nodeValue) => { 
      s += `${nodeValue} `; 
    });
    console.log('Post...');
    console.log(JSON.stringify(binaryTree, null, 2));
    expect(s.trim()).toEqual('1 2 fizz fizzbuzz 8 fizz fizz fizzbuzz buzz');
    expect(binaryTree.root.value).toEqual(1);
    expect(binaryTree.root.left.left.value).toEqual('fizz');
  });
});
