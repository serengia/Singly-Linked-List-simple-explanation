// /////////////////
// ///MY NOTES//////
// ////////////////

// NODE => is a single node. eg: [A] 
// NODE-LIST => is a collection of nodes e.g. [A][B][C]

/*
Characteristics of NODES and NODE-LISTS
1. EMPTY NODE-LIST
   a. Has no NODE
   b. Head = tail = null

2. NODE-LIST with a single/one NODE e.g [A]
   a. Head = Tail = NODE e.g for a NODE-LIST with a single NODE [A], both Head(h) and 
     the Tail(t) points to the NODE.
                ht
                [A]

3. NODE-LIST with more than one NODE. e.g. [A][B][C][D] 
   b. Head(h) = [A] and the Tail(t)= [D].
                h         t
                [A][B][C][D]
   Note, in this case: - First NODE is the Head(h)
                       - Last NODE is the Tail
                       
4. In our example above, the next of the first NODE [A] is [B] and the next of [B] is [C]
5. The next of the last NODE(also called the Tail) is always null.

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {   
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const newNode = new Node(value);
  
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      //                                      H        T
      //  head -A-B-C-D- tail => node list   [B][C][D][E]--
    }
  }

  remove() {
    if (!this.head) {
      return -1;
    }
    const temp = this.head;
    this.head = null
    this.head = temp.next;
    
    return temp.value;
  }
}

const list = new LinkedList();

class Queue {
  add(number) {
    // your code here
    list.add(number);
  }

  remove() {
    // your code here
    return list.remove();
  }
}

const queue = new Queue();

queue.add(3);
queue.add(5);
console.log(queue.remove());
// => 3

queue.add(2);
queue.add(7);
console.log(queue.remove());
// => 5

console.log(queue.remove());
// => 2

console.log(queue.remove());
// => 7

console.log(queue.remove());
// => -1

module.exports = Queue;
