// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let linked = this.head;
    let count = 0;
    while (linked) {
      linked = linked.next;
      count += 1;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next
    }
    previous.next = null;
  }

  insertLast(data) {
    const newNode = new Node(data)
    if (!this.head) {
      this.head = newNode;
      return;
    };
    if (!this.head.next) {
      this.head.next = newNode;
      return;
    }
    let node = this.head.next;
    while (node.next) {
      node = node.next;
    }
    node.next = newNode;
  }

  getAt(position) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === position) {
        return node;
      }
      counter += 1;
      node = node.next;
    }
    return null;
  }

  insertAt(data, position) {
    if (position === 0) {
      this.insertFirst(data);
      return;
    }
    let counter = 1;
    let previous = this.head;
    let node = this.head.next;
    while (node) {
      if (counter === position) {
        previous.next = new Node(data, node);
        return;
      }
      counter += 1;
      previous = node;
      node = node.next;
    }
    previous.next = new Node(data);
  }

  forEach(fn) {
    for (let i = 0; i < this.size(); i += 1) {
      fn(this.getAt(i), i);
    };
  }
}

module.exports = { Node, LinkedList };
