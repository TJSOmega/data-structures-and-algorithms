'use strict';
const LL = require('../../lib/ll.js');

describe('LINKED LIST TEST', () => {


  it ('should create an empty list of instantiation', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });

  it('should add items to the list', () => {
    let list = new LL();
    let first = 'first';
    let second = 'second';

    list.insert(first);
    expect(list.head.value).toEqual(first);
    list.insert(second);
    console.log(list);
  });

});

