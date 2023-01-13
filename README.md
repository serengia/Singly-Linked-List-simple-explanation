# Singly Linked List simple explanation with example
Some times it is very difficult to understand and implement a Singly Linked List. 
This repo makes aims to make it very easy for you to understand

## NOTES

```js
// ///////////////////////////////////////////
// ///QUICK NOTES ONE SINGLY LINKED LIST//////
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
    }
  
    add(value) {
      const newNode = new Node(value);
    
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    remove() { //From beginning
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
  
  
  
  // ///////////////////////////
  // 3. TESTING OUR NODE-LIST
  // ///////////////////////////
  list.add(3);
  list.add(5);
  console.log(list.remove());
  // => 3
  
  list.add(2);
  list.add(7);
  console.log(list.remove());
  // => 5
  
  console.log(list.remove());
  // => 2
  
  console.log(list.remove());
  // => 7
  
  console.log(list.remove());
  // => -1
  

```

