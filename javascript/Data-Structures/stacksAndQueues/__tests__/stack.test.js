'use strict';


const Stack = require('../lib/stack.js');

describe('STACK TESTING', () => {
  it('Can successfully push onto a stack', () => {
    let s1 = new Stack;
    s1.push(10);
    expect(s1.front).toEqual(10);
  });


  it('Can successfully push multiple items onto a stack', () => {
    let s1 = new Stack;

    s1.push(10);
    s1.push(20);
    s1.push(30);
    s1.push(40);

    expect(s1.length).toEqual(4);
  });

  it('Can successfully pop off the stack', () => {
    let s1 = new Stack;

    s1.push(10);
    s1.push(20);
    s1.push(30);
    s1.push(40);
    s1.pop();

    expect(s1.length).toEqual(3);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    let s1 = new Stack;

    s1.push(10);
    s1.push(20);
    s1.push(30);
    s1.push(40);

    expect(s1.length).toEqual(0);
  });

  it('Can successfully peek the front item of a stack', () => {
    let s1 = new Stack;

    s1.push(10);
    s1.push(20);
    s1.push(30);
    s1.push(40);
    let peekItem = s1.peek();

    expect(peekItem).toEqual(40);
  });
});

