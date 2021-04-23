'use strict';

const Node = require('./node.js');
const Queue = require('./queue.js');



class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let nodes = [];

    let _walk = (node) => {
      nodes.push(node.value);
      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
    };

    _walk(this.root);

    return nodes;
  }

  inOrder() {
    let nodes = [];

    let _walk = (node) => {
      if (node.left) { _walk(node.left); }
      nodes.push(node.value);
      if (node.right) { _walk(node.right); }
    };

    _walk(this.root);
    return nodes;
  }

  postOrder() {
    let nodes = [];
    let _walk = (node) => {
      if (node.left) { _walk(node.left); }
      if (node.right) { _walk(node.right); }
      nodes.push(node.value);
    };

    _walk(this.root);

    return nodes;
  }

  largestNumber() {
    let max = this.root.value;

    let nodeChecker = (node) => {
      if (node.value > max) { max = node.value; }
      if (node.left) { nodeChecker(node.left); }
      if (node.right) { nodeChecker(node.right); }

    };

    nodeChecker(this.root);
    return max;
  }

  breadthFirst() {
    let arr = [];
    let q = new Queue();
    q.enqueue(this.root);

    while (!q.isEmpty()) {
      let temp = q.dequeue();
      arr.push(temp.value);
      if (temp.left) { q.enqueue(temp.left); }
      if (temp.right) { q.enqueue(temp.right); }
    }
    return arr;
  }

}

class BinarySearchTree extends BinaryTree {

  add(value, pointer = this.root) {
    const data = new Node(value);
    if (!this.root) {
      this.root = data;
    }
    if (!pointer) {
      return data;
    }

    if (data.value > pointer.value) {
      pointer.right = this.add(value, pointer.right);
    } else {
      pointer.left = this.add(value, pointer.left);
    }
    console.log('POINTER', pointer);
    return pointer;
  }
}

module.exports = {
  BT: BinaryTree,
  BST: BinarySearchTree
};

