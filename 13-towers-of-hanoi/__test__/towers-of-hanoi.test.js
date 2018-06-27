'use strict';

import towersOfHanoi from '../towers-of-hanoi';

describe('Towers of Hanoi Tests', () => {
  test('2 disks', () => {
    const moves = towersOfHanoi(2);
    console.log(moves);
  });

  // test('3 disks', () => {
  //   const moves = towersOfHanoi(3);
  //   console.log(moves);
  // });
});
