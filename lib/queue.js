class Queue {
    constructor(size = 20) {
        this.store = new Array(size);
        this.head = 0;
        this.contains = 0;
    }

    enqueue(element) {
        if (this.contains === 20) { throw new Error("The queue is full"); }
        this.store[this.contains%this.store.length] = element;
        this.contains++;   
    }

    dequeue() {
        if (this.contains === 0) { throw new Error("The queue is empty"); }
        let element = this.store[this.head];
        this.store[this.head] = null;
        this.head = (this.head + 1) % this.contains;
        this.contains--;
        return element;
    }

    front() {
        return this.store[this.head]
    }

    size() {
        return this.contains
    }

    isEmpty() {
        return (this.contains === 0)
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