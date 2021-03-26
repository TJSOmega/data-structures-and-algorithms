'use strict';

const Node = require('./node.js');


class Stack {
  constructor() {
    this.top = null;
    this.storage = [];
  }

  push(item) {

    new Node(item);

    this.storage.push(item);
    this.top = item;
  }

  pop() {
    let item = this.storage.pop();
    this.top = !this.storage.length ? null : this.storage[this.storage.length - 1];

  }

  peek() {
    return this.top;

  }

  isEmpty() {
    let empty = false;
    if (this.storage < 1) {
      empty = true;
    }
    return empty;
  }
}

module.exports = Stack;

