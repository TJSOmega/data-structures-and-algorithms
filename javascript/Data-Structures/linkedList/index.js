'use strict';

const SLL = require('./lib/ll.js');

let ll = new SLL();

ll.insert('first');
ll.insert('2');
ll.insert(true);
ll.insert('Final');
ll.insert('oneMore');
ll.insert('endOfChain');

ll.toString();
