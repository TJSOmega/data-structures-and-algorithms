'use strict';


const Queue = require('../lib/queue.js');

describe('QUEUE TESTING', () => {
  it('Can successfully enqueue', () => {
    let q1 = new Queue;

    q1.enqueue(10);
    expect(q1.front).toEqual(10);
  });

  it('Can successfully enqueue multiple items', () => {

    let q1 = new Queue;

    q1.enqueue(10);
    q1.enqueue(20);
    q1.enqueue(30);
    q1.enqueue(40);
    expect(q1.length).toEqual(4);
  });

  it('Can successfully dequeue an item of the expected value', () => {

    let q1 = new Queue;

    q1.enqueue(10);
    q1.enqueue(20);
    q1.enqueue(30);
    q1.enqueue(40);

    q1.dequeue();
    expect(q1.front).toEqual(20);
  });

  it('Can successfully peek into a queue seeing the expected value', () => {

    let q1 = new Queue;

    q1.enqueue(10);
    q1.enqueue(20);
    q1.enqueue(30);
    q1.enqueue(40);

    let q1Peek = q1.peek();
    expect(q1Peek).toEqual(10);
  });

  it('Can successfully dequeue an item of the expected value', () => {

    let q1 = new Queue;

    q1.enqueue(10);
    q1.enqueue(20);
    q1.enqueue(30);
    q1.enqueue(40);

    q1.dequeue();
    q1.dequeue();
    q1.dequeue();
    q1.dequeue();
    expect(q1.length).toEqual(0);
  });

  it('Can instantiate an empty queue', () => {

    let q1 = new Queue;

    let check = q1.isEmpty();

    expect(check).toEqual(true);
  });

});


