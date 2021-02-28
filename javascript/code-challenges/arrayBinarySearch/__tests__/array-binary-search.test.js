'use strict';

const binaryArray = require('../array-binary-search.js');


describe('Insert Shift Array', () => {

  it('Test Binary for even set of numbers', () => {
    let testArray = [2, 4, 6, 8, 10, 12];
    let num = 6;
    let expected = 2;


    expect(binaryArray(testArray, num)).toEqual(expected);
  });

});

