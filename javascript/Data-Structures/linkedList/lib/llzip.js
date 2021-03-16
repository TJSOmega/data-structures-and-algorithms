const SLL = require('./ll.js');



function zip(list1, list2) {

  let newList = new SLL();



  let current1 = list1.head;
  let current2 = list2.head;
  let added1 = false;
  let added2 = false;

  console.log('THIS IS OUR CURRENT', current1, current2);

  while (current1 !== null || current2 !== null) {

    if (added1 === false && current1 !== null) {
      let add1 = current1;
      console.log('ADD1', add1);
      newList.insert(add1.value);
      added1 = true;
      current1 = current1.next;
    } else if (added2 === false && current2 !== null) {
      let add2 = current2;
      console.log('ADD2', add2);
      newList.insert(add2.value);
      added2 = true;
      current2 = current2.next;
    } else {
      added1 = false;
      added2 = false;
    }

    console.log('TRACKING CURRENT ----------', 'NODE1 ', current1, 'NODE2 ', current2)



  }
  return newList;

}


module.exports = zip;


