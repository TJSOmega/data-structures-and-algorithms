'use strict';

class Node {
  constructor(val, children = []) {
    this.value = val;
    this.left= null;
    this.right= null;
    this.children = children;
  }
}

module.exports = Node;

