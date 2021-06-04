'use strict';

const treeIntersection = require('../tree-intersection.js');

const BST = require('../models/binary-search-tree.js');



describe('Tree Intersection Tests', () => {
  const bst1 = new BST();
  const bst2 = new BST();
  bst1.add(11).add(21).add(32).add(45).add(53).add(16);
  bst2.add(65).add(53).add(14).add(32).add(29).add(11);


  it('Should successfully return an object of matching values', () => {
    expect(typeof (treeIntersection(bst1, bst2))).toEqual('object');

  });

  it('Should print out values located at different positions', () => {

    expect(treeIntersection(bst1, bst2)).toEqual([53, 11, 32]);

  });
});

