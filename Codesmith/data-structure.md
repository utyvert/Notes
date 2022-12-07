# Data Structures

[...]


## Dynamic Typing

Javascript is a **dynamically typed** language. Variables **DO NOT** have a type. The values they hold have a type. These get assigned at *runtime*.

**Javascript**
```js
let hello = 2;
hello = "world";
```
**Java**
```java
int num = 2 // cannot be reassigned to a different data type
```

This is why *Typescript* is used, because it is a statically typed language.

Javascript is *weakly typed*

```js
function add(a,b) {
  return a + b;
} 
// what happens if we call add(1, 'cat')? 
// we would get 1cat
// add ('11' + 1) = '111'
// add('11' - 1) = 10
```

### Type Coercion

Type coercion in JavaScript refers to the *automatic conversion* of values from one type to another when they are used in an operation that expects values of a different type.

For example, when the + operator is used to add two values together, and one of the values is a string and the other is a number, JavaScript will automatically convert the number to a string and concatenate the two strings. 

This is called type coercion because it involves the automatic conversion, or coercion, of one type to another.

### Type Systems: Strong/Weak scale and Static/Dynamic Scale

- Static/Dynamic typing is about **when** type information is acquired (either ar compile-time or at runtime). More concretely, statically typed languages require knowledge of what data type each variable holds
- [...]


## Primitive Types

Javascript is composed of 7 primitive data types and the object data type. Primitives are **immutable values** without properties.

- Number
- String
- Boolean
- BigInt
- Undefined
- Null
- Symbol

### Primitive Types and Immutability

All primitive data types are **immutable** which means we cannot change/alter any portion of them.

```js
let originalString = "abcd";
originalString[2] === "c"; // true or false?
originalString[2] = "2"; // ???
console.log(originalString); // what do we get?
```

### Primitive Types are passed by Value

```js
function change(passedNum) {
  passedNum += 1;
}

let originalNum = 1;
change(originalNum);
console.log('originalNum is:', originalNum);
```

## Composite (Compound) Data Types 

### Object

Objects are a Javascript data type composed of key/value pairs. We can change/update key/value pairs in an object, they are therefore **mutable**.

```js
const myObj = {
  my_key: 123;
}

myObj.my_key = 321;
console.log(myObj.my_key);
```

### Arrays

Arrays are built-in objects organized by **integer-keyed** properties and a length property (index, length).

- They are objects, and also dynamic
- Great for working with ordered lists, require extra work for searching, adding, removing


```js
['a', 'b', 'c', 'd'] 
```
is the same as 
```js 
{
  0: 'a'
  1: 'b'
  2: 'c'
  3: 'd'
}
```

### Composite Data Types are passed by reference

This means they represent the same place in memory when assigned to existing variables.

Primitive data types are **copied**. Object data types are **referenced**.

```js
let a = 4;
let b = a;
b = 5; 
// a = ?
```

vs

```js
const a = {num:4};
const b = a;
b.num = 5;
// a.num = ?
```

# Data Structures (cont.)

## Stacks: Last In, First Out

- A stack is a list of elements that are accessible only from one end of the list, which is called the *top*
- Stacks are efficient because data can be added and removed from the top (constant time) making them fast and easy to implement. O(N) time
- Primary behavior - pushing and popping

## Queues: First In, First Out

- Similar to stacks, you can't access random elements
  - Enqueue: Add an item to the queue
  - Dequeue: Remove an item from the queue
- With array, enqueue is ***constant*** time, and dequeue is ***linear***
- With object, enqueue is ***constant*** time and ***dequeue*** is linear

## Linked List

- A linked list is a collection of objects (called *nodes*), each of which has a reference (or *points to*) the next object in the list

![Example](Week%201/Images/linkedlist.png)

```js
function Node(value) {
  this.value = val;
  this.next = null;

}

function LinkedList() {
  this.head // points to beginning of linked list - val A in diagram
  this.tail // points to end of linked list - val G in diagram
}
```

### Linked List - Entry Points: Head & Tail

- Singly linked list has 1 or 2 entry points (head and tail)
  - We must keep track of the first node (head) in order to access and traverse our list
    - Each node has a single pointer (next)
  - A tail pointer is not required, but it is useful to keep track of the last node to give us a shortcut to add new nodes to the end, making insertion of new nodes more efficient
    - O(1) vs O(N)
  - [...]

### Handling Nodes in the Middle

![](Week%201/Images/ll-middle.png)
![](Week%201/Images/llmid2.png)


## Linked Lists vs Arrays

- Linked lists provide the following two advantages over arrays
  - Dynamic size
  - Ease of insertion/deletion


## Hash Tables

- A data structure (array) used to store information (data).
- Similar to an object.
- Data is inputted into an array at a specific location in the form of key value pairs. This location can be referred to as a "**bucket**",
- **Hashing** - we use a process called hashing to convert some of the immutable string into an integer. This integer then becomes to index of the array where our key value will be stored.


### Simple Hash Function Diagram
![Simple Hash Function](Week%201/Images/hash.png)


### What should a hash function do?

- Map to unique numbers as much as possible with minimal collisions
- [...]


![](Week%201/Images/hasll.png)

## Binary Search Trees (BST)

- Binary Search Trees are designed to make data lookup very fast and efficient
- Like linked lists, collection of objects that point at each other
- A BST allows you to store nodes with lesser values on the left side and greater values on the right side of a parent node.
  - The top most node is called the **root**, and the bottom most nodes for each parent, which point to null (no values) are called **leaf** nodes.
  - A BST always has a left and right node (binary, two options).

![](Week%201/Images/BST.png)

### Traversal

- They can be traversed with different methods:
  - Depth First
    - Pre order - emit as you get to each node
    - Post order - emit the last time you visit the node
    - In order - display in sorted order by going down the left side first
  - Breadth-first
    - Traverse in level order where we visit each node on a level before going to a lower level