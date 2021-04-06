'use strict';


const Queue = require('../lib/queue.js');


class AnimalShelter {

  constructor() {
    this.dogQueue = new Queue,
    this.catQueue = new Queue;
  }
  enqueue(animal){
    if (animal.toLowerCase() === 'dog') {
      this.dogQueue.enqueue(animal);
    }
    else if (animal.toLowerCase() === 'cat') {
      this.catQueue.enqueue(animal);
    }
  }
  dequeue(animal){
    if (animal.toLowerCase() === 'dog') {
      return this.dogQueue.dequeue();
    } else if (animal.toLowerCase() === 'cat') {
      return this.catQueue.dequeue();
    }
  }
}


module.exports = AnimalShelter;

