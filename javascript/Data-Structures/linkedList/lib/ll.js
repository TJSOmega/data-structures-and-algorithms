'use strict';
// Allows us to add new nodes to our Linked list
const Node = require('./node.js');


class SLL {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    return this;
  }

  includes(value) {
    if (!this.head){
      return false;
    }
    let current = this.head;

    while (current) {

      if(current.value === value) {
        return true;
      }

      current = current.next;

      if (!current) {
        return false;
      }

    }
  }

  toString() {
    let current = this.head;
    let string = '';

    while (current) {

      string += `{${current.value}}->`;

      current = current.next;
    }
    string += 'NULL';
    return string;
  }
}


module.exports = SLL;

