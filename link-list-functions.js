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

module.exports = {
  display,
  size
};
