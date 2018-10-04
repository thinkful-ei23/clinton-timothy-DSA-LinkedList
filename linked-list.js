'use strict';

class _Node {
  constructor(value, next) {
    this.value=value;
    this.next=next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertBefore(newItem, currentItem) {
    if (this.head === null) {
      this.insertFirst(newItem);
    }
    else {
      let prevNode = null;
      let currentNode = this.head;
      while(currentNode.value !== currentItem) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = new _Node(newItem, currentNode);
    }
  }

  insertAfter(newItem, currentItem) {
    if (!this.head) {
      return null;
    }
    else {
      let currentNode = this.head;
      while (currentNode !== null && currentNode.value !== currentItem) {
        currentNode = currentNode.next;
      }
      const newNext = currentNode.next;
      currentNode.next = new _Node(newItem, newNext);
    }
  }

  insertAt(newItem, n) {
    if (n === 0) {
      this.insertFirst(newItem);
    }
    else {
      let prevNode = null;
      let currentNode = this.head;
      for (let i=0; i < n; i++) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = new _Node(newItem, currentNode);
    }
  }

  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) { 
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head){
      return null;
    }
    //Check for the item 
    while(currNode.value !== item) {
      //return null if end of the list 
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      }
      else {
        //otherwise keep looking 
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }

  remove(item){ 
    //if the list is empty
    if (!this.head){
      return null;
    }
    //if the node to be removed is head, make the next node head
    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

module.exports = LinkedList;
