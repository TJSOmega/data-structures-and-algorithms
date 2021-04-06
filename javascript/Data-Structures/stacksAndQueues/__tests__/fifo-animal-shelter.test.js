'use strict';
const AnimalShelter = require('../fifoAnimalShelter/fifo-animal-shelter.js');

describe('TEST OF ANIMAL SHELTER QUEUE', () => {
  it('Should properly enqueue a dog', () => {

    const aq1 = new AnimalShelter;
    aq1.enqueue('dog');
    expect(aq1.dogQueue.storage).toEqual(1);
  });

  it('Should properly enqueue a cat', () => {

    const aq1 = new AnimalShelter;
    aq1.enqueue('cat');
    expect(aq1.dogQueue.storage).toEqual(1);
  });

  it('Should properly dequeue a dog', () => {

    const aq1 = new AnimalShelter;
    aq1.enqueue('dog');
    aq1.dequeue('dog');
    expect(aq1.dogQueue.storage).toEqual(0);
  });

  it('Should properly dequeue a cat', () => {

    const aq1 = new AnimalShelter;
    aq1.enqueue('cat');
    aq1.dequeue('cat');
    expect(aq1.catQueue.storage).toEqual(0);
  });
});


