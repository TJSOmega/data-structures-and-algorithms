'use strict';

const Stack = require('./lib/stack.js');
const Queue = require('./lib/queue.js');

const PsuedoQueue = require('./lib/psuedoQueue.js');
const AnimalShelter = require('./fifoAnimalShelter/fifo-animal-shelter.js')


let stack1 = new Stack();

let queue1 = new Queue();


// stack1.push(10)
// stack1.push(20)
// stack1.push(30)
// console.log(stack1)

// stack1.peek()

// stack1.pop()
// console.log(stack1)
// stack1.pop()

// console.log(stack1)
// stack1.isEmpty();


// queue1.enqueue(10)
// queue1.enqueue(20)
// queue1.enqueue(30)
// console.log(queue1)

// queue1.peek()

// queue1.dequeue()
// console.log(queue1)
// queue1.dequeue()

// console.log(queue1)
// queue1.isEmpty();

// let pq1 = new PsuedoQueue()

// pq1.enqueue(1)
// pq1.enqueue(2)
// pq1.enqueue(3)
// pq1.enqueue(4)

// pq1.dequeue()
// pq1.dequeue()

// pq1.enqueue(5)
// pq1.enqueue(6)

// pq1.dequeue()
// pq1.dequeue()
// pq1.dequeue()
// pq1.dequeue()
// pq1.dequeue()
// pq1.dequeue()

const aq1 = new AnimalShelter;

aq1.enqueue('Dog');

aq1.enqueue('Cat');

aq1.enqueue('Dog');
aq1.enqueue('Dog');

aq1.dequeue('Cat');
aq1.dequeue('Dog');
aq1.dequeue('dog');
aq1.dequeue('dog');
console.log(aq1);
