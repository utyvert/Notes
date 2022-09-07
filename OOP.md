# Object Oriented Programming


**Fundamental Goal in OOP:** Data and Functionality.

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
 ~~ const newUser = Object.create(userFunctionStore); ~~
  ```
  newUser.name = name;
  newUser.score = score;
  ```
  ~~return newUser;~~
};
