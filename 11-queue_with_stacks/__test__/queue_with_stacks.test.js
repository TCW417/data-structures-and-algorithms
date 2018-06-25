'use strict';

import Queue from '../queue_with_stacks';

describe('Queue from stacks tests', () => {
  let q;
  beforeEach(() => {
    q = new Queue();
  });

  test('dequeue from empty queue', () => {
    expect(q.dequeue()).toBeUndefined();
  });

  test('enqueue 1 then dequeue 1', () => {
    q.enqueue(1);
    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toBeUndefined();
  });

  test('enqueue 1, 2 then dequeue 1', () => {
    q.enqueue(1);
    q.enqueue(2);
    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toEqual(2);
    expect(q.dequeue()).toBeUndefined();
  });

  test('enqueue 1, 2, 3 then dequeue 1', () => {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.dequeue()).toEqual(1);
    expect(q.queue).toHaveLength(2);
  });
});
