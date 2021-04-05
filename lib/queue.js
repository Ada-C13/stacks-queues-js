class Queue {
    static maxLenth = 20;
    
    constructor() {
        this.store = new Array();
        this.head = 0;
        this.tail = 0;
    }

    enqueue(value) {
        let len = this.store.length;
        if (this.head === this.tail && !this.isEmpty()) {
            throw new Error("Queue is Full!")
        }
        this.store[len] = value;
        this.tail = (this.tail + 1) % Queue.maxLenth;
    }

    dequeue() {
        let len = this.store.length;
        if (len === 0) {
            return;
        }

        const value = this.store[this.head];
        this.store[this.head] = null;
        this.head = (this.head + 1) % Queue.maxLenth;
        return value;
    }

    front() {
        throw new Error("This method has not been implemented!");
    }

    size() {
        throw new Error("This method has not been implemented!");
    }

    isEmpty() {
        return !this.store[this.head] || this.store[this.head] === undefined;
    }

    toString() {
        let arr;
        if (this.head > this.tail) {
            arr = this.store.slice(this.head, this.capacity).concat(this.store.slice(0, this.tail));
        } else {
            arr = this.store
        }
        return JSON.stringify(arr.filter((v) => v !== null));
    }
}

module.exports = Queue;