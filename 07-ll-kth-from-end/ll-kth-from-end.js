'use strict';

const LinkedList = {};

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
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

  kthFromEnd(k) {
    if (k < 0) return undefined;

    const ptrs = [];
    let ptr = this.next;
    while (ptr !== null) {
      ptrs.unshift(ptr);
      ptr = ptr.next;
    }
    
    if (k > ptrs.length - 1) return undefined;
    
    return ptrs[k].value;
  }
}

LinkedList.List = List;
LinkedList.ListNode = ListNode;

module.exports = LinkedList;
