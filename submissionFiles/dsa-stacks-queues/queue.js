/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}



/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  } //nothing in queue

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
    //this sets .next of the node in last to the new node then sets this.last to newNode
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size += 1;

    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) {
      throw new Error('Queue is empty')
    }

    const result = this.first;
    this.first = this.first.next;
    this.size -= 1;

    if (this.size === 0) {
      this.last = null;
    }

    return `removed ${result.val} from queue`
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return `first value in the queue is ${this.first.val}`;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

module.exports = Queue;

const q = new Queue();
console.log(q)

console.log(q.enqueue(20))
console.log(q)
console.log(q.enqueue(30))
console.log(q)


