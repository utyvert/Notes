# Time Complexity

## Algorithms 
[...]

## What is Time Complexity?

- Time complexity (Big O Notation) is an easy way to communicate the effectiveness of our algorithms.
- The more computational steps an algo performs, the longer it takes to complete.
- **Big O Notation** describes the relationship between the size of an algorithm's input and the number of computational steps it takes to complete.
  - How does the time/space requirements scale with input size?
  - Worst case scenario.


## Big O Notation

### Interpretations

- **O(1)** - *(constant)* time complexity
  - *Example*: Testing to see if a key is in an object
- **O(n)** - *(linear)* time complexity
  - *Example*: Finding the mean (average) of an array of numbers.
- **O(n<sup>2</sup>)** - *(quadratic)* time complexity
  - *Example*: Selection sort

### O(1) - Constant Time

![](Images/Big%20O%201.png)

- Constant time refers to the performance of an algorithm that does not change as the size of the input increases
- In other words, an algorithm that runs in constant time performs the same number of operations regardless of the size of the input


### O(n) - Linear Time

```js
const addNums = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i]
  }

  return sum;
}
```


![](Images/Big%20O%202.png)

- Linear time refers to the performance of an algorithm that scales linearly with the size of the input
- An algorithm that runs in linear time performs a fixed number of operations per input element, and the total number of operations increases linearly as the size of the input increases


### O(n<sup>2</sup>)

***Don't nest for loops*** (if you can avoid it)

```js
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return true;
    }
  }

  return false;
}
```


![](Images/big%20o%203.png)

- Quadratic time refers to the performance of an algorithm that scales quadratically with the size of the input.
- In other words, an algorithm that runs in quadratic time performs a fixed number of operations per input element, and the total number of operations increases by the square of the input size


## Space Complexity

[...]

## Trade-Offs
`
- Often when optimizing an algorithm, you will face a trade-off between space and time complexity
- In modern times, we prioritize time complexity, as technology has advanced

![](Images/big%20o%204.png)

![](Images/Big%20o%205.png)

![](Images/big%20o%206.png)

## Under The Hood

- Many methods we use do a lot under the hood that we cannot see
- i.e. The spread/rest operator ([...]) iterates under the hood