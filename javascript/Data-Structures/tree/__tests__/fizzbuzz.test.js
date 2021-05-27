const Node = require('../models/node.js');
const {BT} = require('../models/tree.js');
const fizzBuzz = require('../models/fizzBuzz.js');
describe('Tree Tests', () => {
  // Fizzbuzz Tree
  let fizzTree = new BT();
  let rootNode = new Node(3);
  let childNodeA = new Node(5);
  let childNodeB = new Node(15);
  let gcNodeA = new Node(1);
  let gcNodeB = new Node(2);
  let gcNodeC = new Node(10);
  let gcNodeD = new Node(11);
  let gcNodeE = new Node(6);
  //         3
  //    5         15
  //  1   2    10  11  6
  // Node 5
  childNodeA.children.push(gcNodeA);
  childNodeA.children.push(gcNodeB);
  // Node 15
  childNodeB.children.push(gcNodeC);
  childNodeB.children.push(gcNodeD);
  childNodeB.children.push(gcNodeE);
  rootNode.children.push(childNodeA);
  rootNode.children.push(childNodeB);
  // Add root Node
  fizzTree.root = rootNode;
  // let newTreeNode = new Node(node.value, node.children);
  // alteredTree.root = newTreeNode;
  it('Can successfully before FizzBuzz on a tree.', () => {
    let x = Object.assign({}, rootNode);
    let node = fizzBuzz(x);
    console.log(JSON.stringify(node, undefined, 2));
    expect(node.root.value).toEqual('Fizz');
    expect(node.root.children[0].value).toEqual('Buzz');
    expect(node.root.children[0].children[0].value).toEqual('1');
    expect(node.root.children[0].children[1].value).toEqual('2');
    expect(node.root.children[1].value).toEqual('FizzBuzz');
    expect(node.root.children[1].children[0].value).toEqual('Buzz');
    expect(node.root.children[1].children[1].value).toEqual('11');
    expect(node.root.children[1].children[2].value).toEqual('Fizz');
  });
});
