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

  insertBefore(val, newVal) {
    let ptr = this;
    if (!ptr.next) return null; // list empty
    while (ptr.next && ptr.next.value !== val) {
      ptr = ptr.next;
    }
    if (!ptr.next) return null; // val not found
    const n = new ListNode(newVal);
    n.next = ptr.next;
    ptr.next = n;
    return n;
  }

  insertAfter(val, newVal) {
    if (!this.next) return null; // empty list
    let ptr = this.next;
    while (ptr && ptr.value !== val) {
      ptr = ptr.next;
    }
    if (!ptr) return null; // value not found
    const n = new ListNode(newVal);
    n.next = ptr.next;
    ptr.next = n;
    return n;
  }
}

LinkedList.List = List;
LinkedList.ListNode = ListNode;

module.exports = LinkedList;
