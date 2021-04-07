'use strict';
const Stack = require('./models/stack.js');

function multiBracketValidation(input) {

  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  const stack = new Stack();
  const arr = input.split('');
  if (!input || typeof input !== 'string'){
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(' || arr[i] === '{' || arr[i] === '[') {
      stack.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ')' || arr[i] === '}' || arr[i] === ']') {

      const check = stack.peek();

      if (arr[i] !== map[check]) {
        // console.log(typeof map[check], map[check] )
        // console.log(typeof arr[i], arr[i])
        return false;
      }
      stack.pop();
    }
    // console.log(stack.storage)
  }
  if (stack.storage.length !== 0) {
    return false;
  }
  return true;
}


module.exports = multiBracketValidation