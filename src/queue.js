const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

const { ListNode } = require("../extensions/list-node.js");

class Queue {
  constructor() {
    this.front = null; // front of the queue
    this.rear = null; // rear of the queue
  }

  getUnderlyingList() {
    return this.front;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (!this.front) {
      // Queue is empty
      return null;
    }

    const removedValue = this.front.value;
    this.front = this.front.next;

    // If the queue becomes empty after dequeue
    if (!this.front) {
      this.rear = null;
    }

    return removedValue;
  }
}

module.exports = {
  Queue,
};
