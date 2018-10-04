'use strict';

const LinkedList = require('./linked-list');

function main() {
  const SLL = new LinkedList();

  const items = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck', 'squirrel'];

  for (let i=0; i < items.length; i++) {
    SLL.insertLast(items[i]);
  }

  SLL.insertLast('Tauhida');

  SLL.insertBefore('Athena', 'Boomer');

  SLL.insertAfter('Hotdog', 'Helo');

  SLL.insertAt('Kat', 3);

  SLL.remove('Tauhida');

  console.log(JSON.stringify(SLL));
}

main();
