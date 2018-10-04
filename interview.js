'use strict';

const Linkedlist = require('./linked-list');
// const linkedlist = new Linkedlist();
const { findLast } = require('./link-list-functions');
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
function middleOfList(list) {
  if (!list.head) {
    return null;
  }
  let currNode = list.head;
  while (currNode.next !== null && currNode.next.next !== null) {
    list.head = list.head.next;
    list.remove(findLast(list).value);
    currNode = list.head;
  }
  return currNode;
}
module.exports = { reverseList, getThirdFromEnd, middleOfList };
