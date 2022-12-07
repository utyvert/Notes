# Approach Lecture: JS Fundamentals solutions


## Memoization



```js
obj1 = {};
obj2 = {};

[...]
```

## Spread vs Rest
[...]
## Pass by Reference vs Value

Primitive data types are **passed by value**.
```js
let num = 3
```
***num*** refers to the number 3.

Composite data types are **passed by reference**.
```js
const obj = {num: 3}
```
***obj*** refers to the memory address at which the object is stored.

## Shallow vs Deep Clones

```js
const users = [{'user':'barney'}, {'user': 'fred'}];
```

### Shallow Clone
[...]
### Deep Clone
[...]

```js
// shallowClone example

let ogObj = {
  greeting: 'hello'
};

let newObj = ogObj;
console.log(ogObj)
[...]
```

**cloneDeep example**

```js

// declare function (cloneDeep) that accepts an input to be deep cloned

const cloneDeep = value => {

  // declare a variable (copy) to hold a new instance of the input's data type
  const copy = new value.constructor;

  // new value.constructor creates a new variable of the same datatype as passed in 'value'

  // iterate through the input 
  for (let key in value) {

    // if the current key is a composite datatype 
    if (typeof value[key] === 'object') {

      // set the key's value in the copy to a recursive call, passing in the current key
      copy[key] = cloneDeep(value[key])

      // if the current datatype is not composite
    } else {

      // set the key's value in the copy to the corresponding property in input
      copy[key] = value[key];
    }
  } 

  return copy;
}


const value1 = {a: 1, b: 2, };
const copy = new value1.constructor;
console.log(value1); // {a: 1, b: 2}
console.log(copy); // {}

[...]
```

## Throttling

### Why do we need throttling?

Overload of requests on server, too many users, etc.

Throttle is similar to a spring that throws a ball
- After the ball flies, the spring needs time to shrink bacl
- Cannot throw anymore balls until it's ready again


```js

// declare a func (throttle) that takes in two arguments, fn and wait

const throttle = (fn, wait) => {
   
  // declare variable lastCall to hold a time when the function was last invoked, init 0
  let lastCall = 0;

  // return a function that accepts multiple unknown arguments
  return function cb(...args) {
    // declare variable to hold current time
    let now = Date.now();

    //check to see if enough time has passed since the last call of the function
    if (now - lastCall >= wait) {

      // update lastCall to the current time
      lastCall = now;

      // return the stored function invoked with all passed in arguments
      return fn(...args);
    }
  }

}
```