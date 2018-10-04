'use strict';

function display(list) {
  const listDisplay = {};
  let currNode = list.head;
  let position = 0;
  while (currNode) {
    listDisplay[`node${position}`] = {
      value: currNode.value,
      next: currNode.next ? currNode.next.value : null
    };
    currNode = currNode.next;
    position++;
  }
  console.log(listDisplay);
  return listDisplay;
}

const size = list => {
  let listSize = 0;
  if (!list.head) {
    return listSize;
  }
  let currNode = list.head;
  while (currNode) {
    listSize++;
    currNode = currNode.next;
  }
  return listSize;
};

function isEmpty(list) {
  return !list.head;
}

function findPrevious(list, item) {
  if (!list.head || list.head.value === item) {
    return null;
  }
  let prevNode = null;
  let currentNode = list.head;
  while (currentNode.value !== item) {
    prevNode = currentNode;
    currentNode = currentNode.next;
  }
  return prevNode;
}

function findLast(list) {
  if (!list.head) {
    return null;
  }
  let currentNode = list.head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  return currentNode;
}

function WhatDoesThisProgramDo(lst){
  let current = lst.head;
  while(current !== null){
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else{
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

module.exports = {
  display,
  size,
  isEmpty,
  findPrevious,
  findLast,
  WhatDoesThisProgramDo
};
