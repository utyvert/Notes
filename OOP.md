#Object Oriented Programming


**Fundamental Goal in OOP**
Data and Functionality
*In example:* User data is data / 'Increment' is functionality

Everytime you run a function in Javascript, you create a new execution context.

Javascript checks local memory -> then it checks global memory (*Example: looks for user1*)

##Create User 2 - Dot Notation
`const user2 = {};

user2.name = "Tim"
user2.score = 6;
user2.increment = function() {
  user2.score++;
}



If a function is attached to an object - it is known as a 'method'.