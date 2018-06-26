'use strict';

const Queue = class {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    const temp = [];
    for (let i = 0; i < this.queue.length; i += 1) {
      temp.push(this.queue.pop());
    }
    this.queue.push(value);
    for (let i = 0; i < temp.length; i += 1) {
      this.queue.push(temp.pop());
    }
  }

  dequeue() {
    return this.queue.pop();
  }
};

export default Queue;
