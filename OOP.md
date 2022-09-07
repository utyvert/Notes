# Object Oriented Programming


**Fundamental Goal in OOP:** Data and Functionality. (with the hand movements)

*In example:* User data is data / 'Increment' is functionality.

Everytime you run a function in Javascript, you create a new execution context.

Javascript checks local memory -> then it checks global memory (*Example: looks for user1*)

## Create User 2 - Dot Notation
``` 
const user2 = {};

user2.name = "Tim"
user2.score = 6;
user2.increment = function() { // this is known as a method - not a function
  user2.score++;
} 
```

If a function is attached to an object - it is known as a 'method'.

## Object.create

```
const user3 = Object.create(null) // Object.create always creates an empty object - it has nothing to do with null - you can leave null out

user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
  user3.score++;
}
```

This is an unsustainable practice of coding. When you have many many users - you cannot create a new user3, user4 for each user.

You must create a userCreator function.

## userCreator function

```
function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  };
  return newUser; // don't forget
};

const user1 = userCreater("Will", 3);
const user2 = userCreator("Tim", 5);
```


user1 and user2 in global memory are now objects.

This is known as a factory function.

**Pros:**

Super simple to read and understand.

**Cons:**

Defines the increment method on every single object.

## userFunctionStore

```
function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore); //userFunctionStore is a 'bond' that can be accessed when an object is created in this way
  newUser.name = name;
  newUser.score = score;
  return newUser;
};

const userFunctionStore = {
  increment: function(){this.score++;},
  login: function(){console.log("Logged in");}
};

const user1 = userCreator('Will', 3);
const user2 = userCreator('Tim', 5);
user1.increment();
```

userFunctionStore acts as a 'bond' that can be accessed when an object is created in this method. This is a singular function that can hold multiple methods, and is used instead of creating (see: millions) many duplications through the act of creating many users.

**'bond** is known as the dunder proto: __ proto __ 

## 'this.' rules

**Rule 1:** Whenever you are executing a function that is attached to an object (like increment, known as a method), 'this' is always going to equal the object that the method is being called on.

** Global variables are too messy and risky.

## using 'new' to create an object

when you use 'new' - you do not have to write the following crossed off code.

```
function userCreator(name, score) {
  ```
 ~~const newUser = Object.create(userFunctionStore);~~
  ```
  newUser.name = name;
  newUser.score = score;
  ```
  ~~return newUser;~~

};

Using 'new' automatically assigns the new object to 'this'

All functions are objects.

userCreator is a function - but it is also an object.

## Prototype

Prototype is an object inside the userCreator 'object'.

```
function UserCreator(name, score){
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function(){ // adds a method to the prototype object in UserCreator
  this.score++;
}

UserCreator.prototype.login = function(){
  console.log('login');
}

const user1 = new UserCreator('Eva', 9);

user1.increment();
```

## WHY

StackOverflow answer:

**Methods that inherit via the prototype chain can be changed universally for all instances, for example:**

```

function Class () {}
Class.prototype.calc = function (a, b) {
    return a + b;
}

// Create 2 instances:
var ins1 = new Class(),
    ins2 = new Class();

// Test the calc method:
console.log(ins1.calc(1,1), ins2.calc(1,1));
// -> 2, 2

// Change the prototype method
Class.prototype.calc = function () {
    var args = Array.prototype.slice.apply(arguments),
        res = 0, c;

    while (c = args.shift())
        res += c;

    return res; 
}

// Test the calc method:
console.log(ins1.calc(1,1,1), ins2.calc(1,1,1));
// -> 3, 3

```

Notice how changing the method applied to both instances? This is because ins1 and ins2 share the same calc() function. In order to do this with public methods created during construction, you'd have to assign the new method to each instance that has been created, which is an awkward task. This is because ins1 and ins2 would have their own, individually created calc() functions.


Another side effect of creating methods inside the constructor is poorer performance. Each method has to be created every time the constructor function runs. Methods on the prototype chain are created once and then "inherited" by each instance. On the flip side of the coin, public methods have access to "private" variables, which isn't possible with inherited methods.


As for your function Class() {} vs var Class = function () {} question, the former is "hoisted" to the top of the current scope before execution. For the latter, the variable declaration is hoisted, but not the assignment. For example:


```
// Error, fn is called before the function is assigned!
fn();
var fn = function () { alert("test!"); } 

// Works as expected: the fn2 declaration is hoisted above the call
fn2();
function fn2() { alert("test!"); }
```


Question often asked - rebuild the 'new' keyboard - explain how *prototypal inheritance* works in Javascript.

## Classes

Introduced a new syntax for objects, prototypes, to make things easier to view and edit.

Use keyword 'class'.

Inside class - there is a reserved keyword 'constructor' - used to define the functionality you want to execute when you invoke that class. 

Refer to previous code blocks - this is a rewrite of those.
```
class UserCreator {
  constructor (name, score){
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  login() {
    console.log('login')
  }
}
```
