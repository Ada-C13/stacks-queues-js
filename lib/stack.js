const LinkedList = require("../lib/linked-list");

class Stack {
  constructor() {
    this.store = new LinkedList();
  }

  //     push(value) - Adds the value to the top of the stack

  push(value) {
    this.store.addFirst(value);
  }

  // pop - Removes and returns an element from the top of the stack

  pop() {
    const first = this.store.getFirst();
    this.store.delete(first);
    return first;
  }
  // empty ? returns true if the stack is empty and false otherwise
  isEmpty() {
    return this.store.isEmpty();
  }

  toString() {
    JSON.stringify(this.store);
  }
}

module.exports = Stack;
