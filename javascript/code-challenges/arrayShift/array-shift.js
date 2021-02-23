'use strict';

const splitArray = (arr, num) => {
  const newArray = [];
  const midPoint = Math.ceil(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {

    if (i === midPoint) {
      newArray.push(num);
    }
    newArray.push(arr[i]);
  }
  return newArray;
};

module.exports = splitArray;
