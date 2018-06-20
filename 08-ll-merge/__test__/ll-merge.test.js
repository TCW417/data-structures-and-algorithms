'use strict';

const LL = require('../ll-merge');

let list1;
let list2;

describe('Merging list tests', () => {
  beforeEach(() => {
    list1 = new LL.LinkedList();
    list1.append(1);
    list1.append(2);
    list1.append(3);
    list2 = new LL.LinkedList();
    list2.append(10);
    list2.append(20);
    list2.append(30);
  });

  afterEach(() => {
    list1 = list2 = null;
  });

  test('node test 1', () => {
    const n = new LL.ListNode(5);
    expect(n.value).toEqual(5);
  });

  test('zip l1 and l2 equal length', () => {
    const z = LL.mergeLists(list1, list2);
    expect(z.next.value).toEqual(1);
    expect(z.next.next.value).toEqual(10);
    expect(z.next.next.next.value).toEqual(2);
  });
  test('zip l1 and l2, l1 empty', () => {
    list1.next = null;
    const z = LL.mergeLists(list1, list2);
    expect(z.next.value).toEqual(10);
    expect(z.next.next.value).toEqual(20);
    expect(z.next.next.next.value).toEqual(30);
  });
  test('zip l1 and l2, l2 empty', () => {
    list2.next = null;
    const z = LL.mergeLists(list1, list2);
    expect(z.next.value).toEqual(1);
    expect(z.next.next.value).toEqual(2);
    expect(z.next.next.next.value).toEqual(3);
  });
  test('zip l1 and l2, l1 shorter', () => {
    list1 = new LL.LinkedList();
    list1.append(1);
    const z = LL.mergeLists(list1, list2);
    expect(z.next.value).toEqual(1);
    expect(z.next.next.value).toEqual(10);
    expect(z.next.next.next.value).toEqual(20);
  });
  test('zip l1 and l2, l2 shorter', () => {
    list2 = new LL.LinkedList();
    list2.append(10);
    const z = LL.mergeLists(list1, list2);
    expect(z.next.value).toEqual(1);
    expect(z.next.next.value).toEqual(10);
    expect(z.next.next.next.value).toEqual(2);
  });
});
