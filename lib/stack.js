const LinkedList = require("./linked-list");

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(item) {
        this.list.addFirst(item);
    }

    pop() {
        let first = this.list.getFirst();
        this.list.delete(first);

        return first;
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    toString() {
        JSON.stringify(this.store);
    }

    peek() {
        return this.list.getFirst();
    }
}

module.exports = Stack;