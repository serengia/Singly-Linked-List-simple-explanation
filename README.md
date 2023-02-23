# Singly Linked List simple explanation with example
![Singly linked list - 2Feb2022singly-linked-list](https://user-images.githubusercontent.com/69452516/220868746-a9279723-3226-4c95-98a2-8825e337bce0.png)


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
1. AN EMPTY NODE-LIST
   (i). Has no NODE
   (ii). Head(h) = Tail(t) = null


2. A NODE-LIST with a single/one NODE e.g [A]
   (i). Head(h) = Tail(t) = NODE e.g for a NODE-LIST with a single NODE [A], both Head(h) and 
     the Tail(t) points to the NODE as shown bellow:

                 ht
                [A]


3. A NODE-LIST with more than one NODE. e.g. [A][B][C][D] 
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

  unshift(value) {
    // Add node at the beginning
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

  shift() {
    //Remove Node From beginning
    if (!this.head) {
      this.length = 0;
      return -1;
    }
    const temp = this.head;
    this.head = null;
    this.head = temp.next;

    this.length--;

    return temp.value;
  }

  push(value) {
    // Add node to the end of node list
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

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

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    this.length--;
    return currentTail.value;
  }
}

const list = new LinkedList();

// ///////////////////////////
// 3. TESTING OUR NODE-LIST
// ///////////////////////////
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);

// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());

list.unshift(1);
list.unshift(2);
list.unshift(3);
list.unshift(4);

console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
```
