'use strict';

const ll = module.exports = {};

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.next = null;
  }
  append(value) {
    let ptr = this;
    while (ptr.next !== null) {
      ptr = ptr.next;
    }
    ptr.next = new ListNode(value);
  }
}


ll.LinkedList = LinkedList;
ll.ListNode = ListNode;

ll.mergeLists = (l1, l2) => {
  // l1 and l2 are LinkedList objects.
  // l2 will be zippered into l1.
  // zippered list will be returned

  // deal with case of either list being empty
  if (l1.next === null) return l2;
  if (l2.next === null) return l1;

  let l1p = l1.next;
  let l2p = l2.next;
  let l1p2;
  let l2p2;

  while (l1p !== null && l2p !== null) {
    l1p2 = l1p.next;
    l2p2 = l2p.next;
    l1p.next = l2p || l1p2;
    l2p.next = l1p2 || l2p2;
    l1p = l1p2;
    l2p = l2p2;
  }
  return l1;
};
