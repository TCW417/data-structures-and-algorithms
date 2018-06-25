'use strict';

const Queue = class {
  constructor() {
    this.queue = [];
    this.temp = []; 
  }

  enqueue(value) {
    for (let i = 0; i < this.queue.length; i += 1) {
      this.temp.push(this.queue.pop());
    }
    this.queue.push(value);
    for (let i = 0; i < this.temp.length; i += 1) {
      this.queue.push(this.temp.pop());
    }
  }

  dequeue() {
    return this.queue.pop();
  }
};

export default Queue;
