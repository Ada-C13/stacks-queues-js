const LinkedList = require('./linked-list')

class Stack {
    constructor() {
        this.store = new LinkedList;
    }

    push(value) {
        this.store.addLast(value);
    }

    pop() {
        const lastValue = this.store.getLast()
        this.store.delete(lastValue);
        return lastValue;
    }

    isEmpty() {
        const len = this.store.length()
        if (len > 0) {
            return false;
        }

        return true;
    }

    toString() {
        JSON.stringify(this.store);
    }
}

module.exports = Stack;