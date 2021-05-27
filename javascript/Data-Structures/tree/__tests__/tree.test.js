'use strict';

const { BST, BT } = require('../models/tree.js');
const Node = require('../models/node.js');

describe('Tree', () => {

  const tree = new BT();

  beforeAll(() => {

    // Binary Search Tree...
    // tree.add(9); tree.add(4);

    // Binary tree, so this all by hand
    const nine = new Node(9);
    const four = new Node(4);
    const three = new Node(3);
    const six = new Node(6);
    const twelve = new Node(12);
    const eleven = new Node(11);
    const twentytwo = new Node(22);

    tree.root = nine;
    nine.left = four;
    nine.right = twelve;
    four.left = three;
    four.right = six;
    twelve.left = eleven;
    twelve.right = twentytwo;

  });

  it('binary search tree can add a root', () => {
    const testTree = new BST();
    testTree.add(9);
    expect(tree.root.value).toEqual(9);
    testTree.add(4);
    expect(tree.root.left.value).toEqual(4);
  });

  it('is a tree', () => {
    // is tree an "instanceOf" BinarySearchTree
  });

  it('has a valid root', () => {
    expect(tree.root.value).toEqual(9);
  });

  it('pre-order works right', () => {

    console.log(tree.preOrder());
  });

  it('in-order is a sorted array', () => {

    const tree = new BST();
    tree.add(5);
    tree.add(4);
    tree.add(9);
    tree.add(8);
    const list = tree.inOrder();
    expect(list).toEqual([4, 5, 8, 9]);

    console.log(tree.inOrder());
    // console.log(tree.inOrderWithoutHelper(tree.root));
  });

  it('post-order is in the right order', () => {
    console.log(tree.postOrder());
  });

  it('breadth first strips the tree', () => {
    console.log(tree.breadthFirst());
  });

});

describe('LARGEST NUMBER TEST', () => {

  const tree = new BT();

  beforeAll(() => {

    // Binary Search Tree...
    // tree.add(9); tree.add(4);

    // Binary tree, so this all by hand
    const nine = new Node(9);
    const four = new Node(4);
    const three = new Node(3);
    const six = new Node(6);
    const twelve = new Node(12);
    const eleven = new Node(11);
    const twentytwo = new Node(22);

    tree.root = nine;
    nine.left = four;
    nine.right = twelve;
    four.left = three;
    four.right = six;
    twelve.left = eleven;
    twelve.right = twentytwo;

  });

  it('Should return the largest number in a binary tree', () => {
    expect(tree.largestNumber()).toEqual(22);
  });
});

describe('BREADTH FIRST TEST', () => {

  const tree = new BT();

  beforeAll(() => {

    // Binary Search Tree...
    // tree.add(9); tree.add(4);

    // Binary tree, so this all by hand
    const nine = new Node(9);
    const four = new Node(4);
    const three = new Node(3);
    const six = new Node(6);
    const twelve = new Node(12);
    const eleven = new Node(11);
    const twentytwo = new Node(22);

    tree.root = nine;
    nine.left = four;
    nine.right = twelve;
    four.left = three;
    four.right = six;
    twelve.left = eleven;
    twelve.right = twentytwo;

  });

  it('Should return the largest number in a binary tree', () => {
    expect(tree.breadthFirst()).toEqual([9, 4, 12, 3, 6, 11, 22]);
  });
});

