class Queue {
    constructor(capacity = 20) {
        this.capacity = capacity;
        this.array = [];
        this.front = -1;
        this.rear = -1;
    }

    enqueue(element) {
        if (this.front === -1) {
            this.front = 0;
            this.rear = 1;
            this.array[this.front] = element; 
        } else if (this.front === this.rear) {
            throw new Error("The queue is full");
        } else {
            this.array[this.rear] = element;
            this.rear = (this.rear + 1) % this.capacity;
        }
    }

    dequeue() {
        if (this.front === -1) {
            throw new Error("The queue is empty");
        } 

        let data = this.array[this.front];
        this.array[this.front] = null;

        this.front = (this.front + 1) % this.capacity;
        if (this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        }

        return data;
    }

    front() {
        return this.array[front];
    }

    size() {
        return this.array.length;
    }

    isEmpty() {
        return this.front === -1;
    }

    toString() {

        let arr;
        if (this.front > this.rear) {
            arr = this.array.slice(this.front, this.capacity).concat(this.array.slice(0, this.rear));
        } else {
            arr = this.array
        }
        return JSON.stringify(arr.filter((v) => v !== null));
    }
}

module.exports = Queue;