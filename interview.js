'use strict';

const Linkedlist = require('./linked-list');
// const linkedlist = new Linkedlist();
// reverse a list
function reverseList(list) {
  let currNode = list.head;
  let prevNode = null;
  while (currNode) {
    let tempNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = tempNode;
  }
  list.head = prevNode;
  return list;
}

function getThirdFromEnd(list) {
  if (!list.head || !list.head.next.next) {
    return null;
  }
  let currNode = list.head;
  while (currNode.next.next.next) {
    currNode = currNode.next;
  }
  return currNode;
}

module.exports = { reverseList, getThirdFromEnd };
