"use strict";


function treeIntersection(bt1, bt2) {
  let values = {};
  let arr = [];
  let nodes1 = bt1.preOrder();
  let nodes2 = bt2.preOrder();

  for (let i = 0; i < nodes1.length; i++) {
    values[nodes1[i].toString()] = true;
  }

  for (let i = 0; i < nodes2.length; i++) {
    if (values[nodes2[i].toString()]) {
      arr.push(nodes2[i]);
    }
  }

  return arr;
}


module.exports = treeIntersection;

