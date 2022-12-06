# Object-Oriented Programming

## Classes, Prototypes, & Object-Oriented Programming

### An enormously popular paradigm for structuring our complex code.

1. Easy to add features and functionality.
2. 
3. 

## Quiz Game

We will be storing user data using OOP.

### Objects - store functions with their associated data!

This is the principle of encapsulation. Let's keep creating our objects.

What alternative techniques do we have for creating objects?

```javascript
const user1 = {
  name: "Will",
  score: 3,
  increment: function() {
    user1.score++;
  }
};

user1.increment(); // user1.score => 4
```

### Creating user2 using dot notation

- Declare an empty object
- Add properties with dot notation

```javascript
const user2 = {}; // create an empty object

// assign properties to that object
user2.name = "Tim";
user2.score = 6;
user2.increment = function() {
  user2.score++;
};
```

### Creating user3 using Object.create

- Object.create is going to give us fine-grained control over our object later on.

Our code is getting repetitive, we're breaking our **DRY principle** (Don't Repeat Yourself - a core principle of Javascript).
And suppose we have millions of users! What could we do?

```javascript
const user3 = Object.create(null)

user3.name = "Eva";
user3.score = 9;
user3.increment = function() {
  user3.score++;
};
```

## Solution 1
### Generate objects using a function

```javascript
function userCreator(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function() {
    newUser.score++;
  }

  return newUser;
}

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);

user1.increment();

```