const Node = require('./node.js');

class SLL {
  constructor() {
    this.head = null;
  }
  insert(value) {

    if (!this.head) {
      let node = new Node(value);
      this.head = node;
    } else {
      let append = this.head;
      this.head = node;
      node.next = append;
    }
    return this;
  }

  zip(list1, list2) {

    let newList = new SLL();

    while (typeof list1.head || list2.head !== 'undefined') {
      let current1 = list1.head;
      let current2 = list2.head;
      let added1 = false;
      let added2 = false;

      if (current1 && added1 === false) {
        let add1 = list1.head;
        newList.insert(add1);
        added1 = true;

      } else if (current2 && added2 === false) {
        let add2 = list2.head;
        newList.insert(add2);
        added2 = true;
      }

      current1 = list1.head.next;
      added1 = false;
      current2 = list1.head.next;
      added2 = false;

    }
    newList.toString();
    return newList;
  }

}

module.exports = SLL;

