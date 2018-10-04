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
module.exports = { reverseList };
