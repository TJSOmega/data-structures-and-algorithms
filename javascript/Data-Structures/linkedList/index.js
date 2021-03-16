'use strict';

const SLL = require('./lib/ll.js');
const zip = require('./lib/llzip.js');

let ll1 = new SLL();
let ll2 = new SLL();


ll1.insert('1');
ll1.insert('2');
ll1.insert('3');
ll2.insert('First');
ll2.insert('Second');
ll2.insert('Third');
ll2.insert('Fourth');



zip(ll1,ll2).toString();


