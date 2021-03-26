'use strict';

const Node = require('./node.js');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.storage = [];
  }

  enqueue(item) {

    new Node(item);

    this.storage.push(item);
    if (this.storage.length === 1) {
      this.front = item;
      this.rear = item;
    } else {
      this.rear = item;
    }
  }

  dequeue() {
    if (this.storage.length < 1) {
      return 'Empty Queue';
    }

    let item = this.storage.shift();
    if(this.storage.length === 0) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.storage[0];
      this. rear = this.storage[this.storage.length - 1];
    }
    return item;
  }


  peek() {
    return this.front;
  }

  isEmpty() {
    let empty = false;
    if (this.storage < 1) {
      empty = true;
    }
    return empty;
  }
}

module.exports = Queue;


