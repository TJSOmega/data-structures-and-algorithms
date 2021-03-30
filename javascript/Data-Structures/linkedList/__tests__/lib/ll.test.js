'use strict';
const LL = require('../../lib/ll.js');

describe('LINKED LIST TEST', () => {


  it('should create an empty list of instantiation', () => {
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

describe('NEW METHODS TEST', () => {
  it('should accept a number at the end of the list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    let third = 3;

    list.append(first);
    list.append(second);
    list.append(third);
    console.log(list);
    expect(list).toEqual();
  });

  it('allow you to insert an item before an item in the list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;
    let fourth = 4;

    list.append(first);
    list.append(second);
    list.append(fourth);
    list.insertBefore(4, 3);
    console.log(list);
    expect(list).toEqual();
  });

  it('allow you to insert an item after an item in the list', () => {
    let list = new LL();
    let first = 1;
    let third = 3;
    let fourth = 4;

    list.append(first);
    list.append(third);
    list.append(fourth);
    list.insertAfter(1, 2);
    console.log(list);
    expect(list).toEqual();
  });

  it('should insert an item at the beginning of the list', () => {
    let list = new LL();
    let first = 1;

    list.insert(first);
    console.log(list);
    expect(list).toEqual();
  });



  describe('LinkedList KTHFROMEND Tests', () => {
    it('should return false if k is greater than the length of the linekd list', () => {
      let newLL = new LinkedList();
      newLL.append(100).append(200).append(300);
      expect(newLL.kthFromEnd(99)).toBeFalsy();
    });
    it('should return false if k is the same length as the linked list', () => {
      let newLL = new LinkedList();
      newLL.append(100).append(200).append(300);
      expect(newLL.kthFromEnd(3)).toBeFalsy();
    });
    it('should return false if is not a positive interger', () => {
      let newLL = new LinkedList();
      newLL.append(100).append(200).append(300);
      expect(newLL.kthFromEnd(-77777)).toBeFalsy();
    });
    it('should still work with a linked list with 1 value in it', () => {
      let newLL = new LinkedList();
      newLL.append(100);
      expect(newLL.kthFromEnd(0)).toBe(100);
    });
    it('should still work with a linked list with 1 value in it', () => {
      let newLL = new LinkedList();
      newLL.append(100).append(200).append(300).append(400).append(500);
      expect(newLL.kthFromEnd(2)).toBe(300);
    });

  });
});


