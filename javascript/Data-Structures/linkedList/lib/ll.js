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
      let append = this.head;
      this.head = node;
      node.next = append;
    }
    return this;

  }

  includes(value) {
    if (!this.head) {
      return false;
    }
    let current = this.head;

    while (current) {

      if (current.value === value) {
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

  append(value) {
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

  insertBefore(value, newVal) {
    let node = new Node(newVal);
    let search = this.head;
    if (!this.head) {
      this.head = node;
    } else {

      while (value !== search.next.value) {
        search = search.next;
      }

      node.next = search.next;
      search.next = node;
    }
    return this;
  }

  insertAfter(value, newVal) {
    let node = new Node(newVal);
    let search = this.head;
    if (!this.head) {
      this.head = node;
    } else {

      while (value !== search.value) {
        search = search.next;
      }

      node.next = search.next;
      search.next = node;

    }
    return this;
  }

  kthFromEnd(value) {
    console.log(typeof value);


    if (typeof value !== 'number') {
      return 'Please enter a number';
    }


    let current = this.head;
    let length = 0;

    if (!current) {
      return 'Exception';
    }
    else {
      while (current) {
        length++;
        current = current.next;
        console.log(length);
      }
    }

    if (length <= value || value < 0) {
      return 'Exception';
    }



    current = this.head;
    let pointer = length - value;
    let counter = 0;
    console.log(pointer);

    while (current) {
      counter++;
      if (pointer === counter) {
        return current;
      }
      current = current.next;

    }

  }
}


module.exports = SLL;

