'use strict';

class _Node {
  constructor(value, prev, next) {
    this.value=value;
    this.prev=prev;
    this.next=next;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(value) {
    if (this.head === null) {
      const newNode = new _Node(value, null, null);
      this.head = newNode;
      this.tail = newNode;
    } else {
      const newNode = new _Node(value, null, this.head);
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  insertLast(value) {
    if (this.head === null) {
      const newNode = new _Node(value, null, null);
      this.head = newNode;
      this.tail = newNode;
    } else {
      const newNode = new _Node(value, this.tail, null);
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insertBefore(before, item) {
    if (this.head === null || before === this.head.value) {
      this.insertFirst(item);
    } else {
      let currNode = this.head.next;
      while (currNode !== null) {
        if (currNode.value === before) {
          const newNode = new _Node(item, currNode.prev, currNode);
          currNode.prev = newNode;
          newNode.prev.next = newNode;
          break;
        }
        currNode = currNode.next;
      }
    }
  }

  insertAfter(after, item) {
    if (this.head === null || after === this.tail.value) {
      this.insertLast(item);
    } else {
      let currNode = this.tail;
      while (currNode !== null) {
        if (currNode.value === after) {
          break;
        }
        currNode = currNode.prev;
      }
    }
  }

  insertAt(item, n) {
    if (n === 0) {
      this.insertFirst(item);
      return;
    }
    let prevNode = null;
    let currNode = this.head;
    for (let i = 0; i < n; i++) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      return null;
    }
    prevNode.next = new _Node(item, prevNode, currNode);
    currNode.prev = prevNode.next;
  }

  display(){
    let currNode = this.head;
    let result = [];
    while(currNode) {
      result.push(currNode.value);
      currNode = currNode.next;
    }
    return result;
  }
}

function mainDLL() {
  const DLL = new DoubleLinkedList();
  DLL.insertFirst('Aquaria');
  DLL.insertLast('Gemenon');
  DLL.insertBefore('Gemenon', 'Caprica');
  DLL.insertAfter('Gemenon', 'Picon');
  DLL.insertAt('Sagittaron', 2);
  // console.log(DLL);
  console.log(DLL.display());
}

mainDLL();
