/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    //list is empty
    if (!this.head) //if list is empty if(this.head === null)
    {
      this.head = newNode;
      this.tail = newNode;
    }
    else //if it is not empty
    {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) { //if list is empty
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

  }
  /** pop(): return & remove last item. */

  pop() {
    //if empty
    if (this.head === null) return null;
    
    //if has one
    if (this.head === this.tail)
    {
      let removedItem = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return removedItem.val;
    } 

    let currentNode = this.head

    while (currentNode.next !== this.tail)
    {
      currentNode = currentNode.next
    }

    let removedItem = this.tail;
    this.tail = currentNode;
    this.tail.next = null;
    this.length--;

    return removedItem.val

  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) return null;
    
    let firstItem = this.head;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    this.length--;
    return firstItem.val

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let current = this.head;

    for (let i = 0; i < idx; i++){
      current = current.next;
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) return false;

    let current = this.head;
    for (let i = 0; i < idx; i++){
      current = current.next;
    }

    current.val = val;
    return true;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
if (idx < 0 || idx > this.length) return false; // Check for invalid index

  if (idx === 0) { // Insert at the beginning
    this.unshift(val);
    return true;
  }

  if (idx === this.length) { // Insert at the end
    this.push(val);
    return true;
  }

  let newNode = new Node(val);
  let current = this.head;

  for (let i = 0; i < idx - 1; i++) { // Traverse to the node before the index
    current = current.next;
  }

  newNode.next = current.next; // Insert the new node in between
  current.next = newNode;

  this.length++;
  return true;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) return null; // Check for invalid index

    if (idx === 0) { // Remove the first node
      return this.shift();
    }

    if (idx === this.length - 1) { // Remove the last node
      return this.pop();
    }

    let current = this.head;
    for (let i = 0; i < idx - 1; i++) { // Traverse to the node before the index
      current = current.next;
    }

    let removedNode = current.next; // The node to be removed
    current.next = removedNode.next; // Bypass the removed node

    this.length--;
    return removedNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (!this.head) return 0; // If the list is empty, return 0

    let total = 0;
    let current = this.head;

    while (current) { // Traverse the list and sum up the values
      total += current.val;
      current = current.next;
    }

    return total / this.length; // Calculate the average

  }
}

module.exports = LinkedList;
