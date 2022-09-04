# Object Oriented Programming


**Fundamental Goal in OOP**

Data and Functionality

*In example:* User data is data / 'Increment' is functionality

Everytime you run a function in Javascript, you create a new execution context.

Javascript checks local memory -> then it checks global memory (*Example: looks for user1*)

## Create User 2 - Dot Notation
``` 
const user2 = {};

user2.name = "Tim"
user2.score = 6;
user2.increment = function() { //this is known as a method - not a function
  user2.score++;
} 
```

If a function is attached to an object - it is known as a 'method'.

**Object.create** 

```
const user3 = Object.create(null) //Object.create always creates an empty object - it has nothing to do with null

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
  return newUser;
};

const user1 = userCreater("Will", 3);
const user2 = userCreator("Tim", 5);
```
