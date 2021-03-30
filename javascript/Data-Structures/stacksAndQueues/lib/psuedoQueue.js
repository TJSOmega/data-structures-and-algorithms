const Node = require('./node.js');
const Stack = require('./stack.js');


class PsuedoQueue {

  constructor() {
    this.front = null;
    this.rear = null;
    this.stackEQ = new Stack();
    this.stackDQ = new Stack();
  }



  enqueue(value) {
    new Node(value);

    while (this.stackDQ.storage > 0) {
      this.stackEQ.push(this.stackDQ.pop());
    }

    this.stackEQ.push(value);

  }


  dequeue() {
    if (this.stackDQ.storage) {
      while (this.stackEQ.storage > 0) {
        this.stackDQ.push(this.stackEQ.pop());
      }

      this.stackDQ.pop();
    } else {

      return null;
    }
  }
}


module.exports = PsuedoQueue;

