'use strict';

const LinkedList = require('./linked-list');
const { display, size, isEmpty, findPrevious, findLast } = require('./link-list-functions');

function main() {
  const SLL = new LinkedList();
  const emptyList = new LinkedList();

  const items = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck', 'squirrel'];

  for (let i = 0; i < items.length; i++) {
    SLL.insertLast(items[i]);
  }

  SLL.insertLast('Tauhida');

  SLL.insertBefore('Athena', 'Boomer');

  SLL.insertAfter('Hotdog', 'Helo');

  SLL.insertAt('Kat', 3);

  SLL.remove('Tauhida');
  // console.log(JSON.stringify(SLL));
  display(SLL);
  // console.log(size(SLL));
  // console.log(isEmpty(SLL));
  // console.log(isEmpty(emptyList));
  // console.log(findPrevious(SLL, 'squirrel'));
  // console.log(findPrevious(SLL, 'Apollo'));
  // console.log(findPrevious(emptyList, 'Apollo'));
  console.log(findLast(SLL));
  console.log(findLast(emptyList));
}

main();
