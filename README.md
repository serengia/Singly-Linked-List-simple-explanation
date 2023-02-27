# Singly Linked List simple explanation with example

Some times it is very difficult to understand and implement a Singly Linked List.
This repo makes aims to make it very easy for you to understand

## NOTES

```js
// ///////////////////////////////////////////
// ///QUICK NOTES ON SINGLY LINKED LIST///////
// ///////////////////////////////////////////

// NODE => is a single node. eg: [A]
// NODE-LIST => is a collection of nodes e.g. [A][B][C]

/*
Characteristics of NODES and NODE-LISTS
1. EMPTY NODE-LIST
   a. Has no NODE
   b. Head(h) = Tail(t) = null


2. NODE-LIST with a single/one NODE e.g [A]
   a. Head(h) = Tail(t) = NODE e.g for a NODE-LIST with a single NODE [A], both Head(h) and 
     the Tail(t) points to the NODE as shown bellow:

                 ht
                [A]


3. NODE-LIST with more than one NODE. e.g. [A][B][C][D] 
   a. Head(h) = [A] and the Tail(t)= [D] as shown bellow:

                h         t
                [A][B][C][D]

   Note, in this case: - First NODE [A] is the Head(h)
                       - Last NODE [B] is the Tail(t)
                       
4. In our example above, the "next" node of the first NODE [A] is [B] and the    
   "next" node of [B] is [C]

5. The "next" node of the last NODE(also called the Tail) is always null.

*/

// ///////////////////////////
// 1. CREATING A NODE CLASS
// ///////////////////////////
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// ///////////////////////////
// 2. CREATING A NODE-LIST CLASS
// ///////////////////////////

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // ACTION: Add node at the beginning of a node list
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      this.length++;
      return this;
    }

    const temp = this.head;
    this.head = newNode;
    newNode.next = temp;

    this.length++;
    return this;
  }

  // ACTION: Remove a node at the beginning of a node list
  shift() {
    if (!this.head) {
      this.length--;
      return -1;
    }
    const temp = this.head;
    this.head = null;
    this.head = temp.next;

    this.length--;

    return temp.value;
  }

  // ACTION: Add a node at the end of a node list
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // ACTION: remove a node from the end of a node list
  pop() {
    if (!this.head) return null;
    let currentTail = this.head;
    let newTail = currentTail;

    while (currentTail.next) {
      newTail = currentTail;
      currentTail = currentTail.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return currentTail.value;
  }

  // Search for a node
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      counter++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  set(index, value) {
    const foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.value = value;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const previousNode = this.get(index - 1);
    const newNode = new Node(value);
    const oldNode = previousNode.next;
    previousNode.next = newNode;
    newNode.next = oldNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const previousNode = this.get(index - 1);
    const nodeToRemove = previousNode.next;
    previousNode.next = null;
    const nextNode = nodeToRemove.next;

    previousNode.next = nextNode;
    this.length--;
    return nodeToRemove;
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let nextNode;
    let previousNode = null;

    let length = 0;
    while (length < this.length) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
      length++;
    }
    return this;
  }

  // BIG O - TIME COMPLEXITY ANALYSIS

  // 1.  unshift()
  // ACTION: Add node at the beginning of a node list
  // ✅Excellent in terms of Time Complexity
  // ✅has a BigO of CONSTANT TIME COMPLEXITY, ie O(1)

  // 2. shift()
  // ACTION: Remove a node at the beginning of a node list
  // ✅Excellent in terms of Time Complexity
  // ✅has a BigO of CONSTANT TIME COMPLEXITY, ie O(1)

  // 3. push()
  // ACTION: Add a node at the end of a node list
  // ✅Excellent in terms of Time Complexity
  // ✅has a BigO of CONSTANT TIME COMPLEXITY, ie O(1)

  // 4. pop()
  // ACTION: remove a node from the end of a node list
  // ☹️ Not so great in terms of Time Complexity
  // ☹️ has a BigO of LINEAR TIME COMPLEXITY, ie O(n)

  // 5. get()
  // ACTION: get/search a node from a node list
  // ☹️ Not so great in terms of Time Complexity
  // ☹️ has a BigO of LINEAR TIME COMPLEXITY, ie O(n)

  // 6. set()
  // ACTION: get/search a node from a node list
  // ☹️ Not so great in terms of Time Complexity
  // ☹️ has a BigO of LINEAR TIME COMPLEXITY, ie O(n)

  // 7. insert()
  // ACTION: get/search a node from a node list
  // ☹️ Not so great in terms of Time Complexity
  //  Great if you are inserting from the beginning(ie. unshift) or
  //  inserting at the end(ie. push)
  // ☹️ has a BigO of LINEAR TIME COMPLEXITY, ie O(n)

  // 8. remove()
  // ACTION: get/search a node from a node list
  // ☹️ Not so great in terms of Time Complexity
  // Great if you are removing from the beginning(ie. shift)
  // ☹️ has a BigO of LINEAR TIME COMPLEXITY, ie O(n)

  // 8. reverse()
  // ACTION: get/search a node from a node list
  // ☹️ Not so great in terms of Time Complexity
  // ☹️ has a BigO of LINEAR TIME COMPLEXITY, ie O(n)
}

const list = new LinkedList();

// ///////////////////////////
// 3. TESTING OUR NODE-LIST
// ///////////////////////////
list.push(1);
list.push(2);
list.push(3);
list.push(4);

// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());

// list.unshift(1);
// list.unshift(2);
// list.unshift(3);
// list.unshift(4);

// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());

// console.log(list.get(1));
// list.set(1, 10);
// console.log(list.get(1));

// console.log(list.insert(4, 9));
// console.log(list.get(3));

// console.log(list.remove(1));
// console.log(list);

console.log("ORIGINAL=>", list);
list.reverse();
console.log("NEW=>", list);
```
