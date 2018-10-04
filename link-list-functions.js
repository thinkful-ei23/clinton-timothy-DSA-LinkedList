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

module.exports = {
  display
};
