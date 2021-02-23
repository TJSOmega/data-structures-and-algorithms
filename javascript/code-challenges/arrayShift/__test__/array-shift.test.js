'use strict';

const insertShiftArray = require('../array-shift.js');

describe('Insert Shift Array', () => {

  it('insert number into middle of an even array', () => {
    let myArray = [1, 2, 3, 4];
    let expected = [1, 2, 99, 3, 4];

    insertShiftArray(myArray, 99);
    console.log(myArray);
    console.log(expected);
    expect(myArray).toEqual(expected);
  });

  it('insert number into middle of an odd array', () => {
    let myArray = [1, 2, 3, 4, 5];
    let expected = [1, 2, 3, 99, 4, 5];

    insertShiftArray(myArray, 99);
    console.log(myArray);
    console.log(expected);
    expect(myArray).toEqual(expected);
  });
});
