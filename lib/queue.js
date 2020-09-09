class Queue {
  constructor(size = 20) {
    this.store = Array(size);
    this.tail = 0;
    this.head = 0;
    this.length = size;
  }

  //     enqueue(value) - Adds the value to the back of the queue.
  enqueue(element) {
    if (this.store[this.tail] === undefined || this.store[this.tail] === null) {
      this.store[this.tail] = element;
      this.tail = (this.tail + 1) % this.length;
    } else {
      throw new Error("The buffer is full");
    }
  }
  //         dequeue - removes and returns a value from the front of the queue

  dequeue() {
    if (this.isEmpty()) return null;
    const value = this.store[this.head];
    this.store[this.head] = null;
    this.head = (this.head + 1) % this.length;
    return value;
  }

  front() {
    return this.store[this.head];
  }

  size() {
    return this.length;
  }

  // empty ? returns true if the queue is empty and false otherwise
  isEmpty() {
    return (
      this.store[this.head] === undefined || this.store[this.head] === null
    );
  }

  toString() {
    let arr;
    if (this.head > this.tail) {
      arr = this.store
        .slice(this.head, this.capacity)
        .concat(this.store.slice(0, this.tail));
    } else {
      arr = this.store;
    }
    return JSON.stringify(arr.filter((v) => v !== null));
  }
}

module.exports = Queue;
