'use strict';

const LL = require('../ll-kth-from-end');

let list;

describe('Linked list tests', () => {
  beforeEach(() => {
    list = new LL.List();
    list.append(1);
    list.append(2);
    list.append(3);
  });

  afterEach(() => {
    list = null;
  });

  test('node test 1', () => {
    const n = new LL.ListNode(5);
    expect(n.value).toEqual(5);
  });

  test('find kth test for -1', () => {
    expect(list.kthFromEnd(-1)).toBeUndefined();
  });

  test('find 3rd from end of 3', () => {
    expect(list.kthFromEnd(3)).toBeUndefined();
  });

  test('find k=2 in list of 3', () => {
    expect(list.kthFromEnd(2)).toEqual(1);
  });

  test('find k=1 in list of 3', () => {
    expect(list.kthFromEnd(1)).toEqual(2);
  });

  test('find k=0 in list of 3', () => {
    expect(list.kthFromEnd(0)).toEqual(3);
  });
});
