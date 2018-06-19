'use strict';

const LL = require('../ll_insertions');

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

  test('append test 2', () => {
    const lst = new LL.List();
    lst.append(1);
    expect(lst.next.value).toEqual(1);
  });

  test('append test 3', () => {
    list.append(4);
    list.append(5);
    expect(list.next.next.next.next.next.value).toEqual(5);
  });

  test('insertBefore test 1', () => {
    list.insertBefore(1, 5); // insert 5 before 1
    expect(list.next.value).toEqual(5);
  });

  test('insertBefore test 2', () => {
    list.insertBefore(3, 5);
    expect(list.next.next.next.value).toEqual(5);
  });

  test('insertBefore test 3', () => {
    expect(list.insertBefore(5, 5)).toBeNull();
  });

  test('insertAfter test 1', () => {
    list.insertAfter(1, 5);
    expect(list.next.next.value).toEqual(5);
  });

  test('insertAfter test 2', () => {
    list.insertAfter(3, 5);
    expect(list.next.next.next.next.value).toEqual(5);
  });

  test('insertAfter test 3', () => {
    const lst = new LL.List();
    expect(lst.insertAfter(1, 2)).toBeNull();
  });

  test('insertafter test 4', () => {
    expect(list.insertAfter(9, 5)).toBeNull();
  });
});
