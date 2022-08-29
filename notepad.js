// create a function, takes in an array of numbers/integers
// returns an array of the even numbers
// input may not be an array of integers only
  // input is an any type
//if input is not an array, return null
//input types: any
//output types: array or null

const filterArray = (any) => {
  // check typeof input
  if (Array.isArray(any)) {
    return any.filter(x => x % 2 === 0);
    // create an empty array as a container for the even numbers
    // iterate through the input array
      // check if each element is even using modulo
      

  } else {
    return null;
  }

  // if input is an array
    // filter the array
  // if input is not an array
    // return null

}

// console.log(filterArray([4,3,2,5,1])) // [4,2]



function palindrome(string, index = string.length - 1, reverseStr = "") {
    if (!string[index]) { 	// base case: if string[index] is undefined, check string and reverse str against each other and return a boolean value

      let checkedString = letterFilter(string);

      if (checkedString === reverseStr) return true; // if the new string and reverseStr are the same, return true
      else return false;
    }
  	
   // recursive case:
    if (letterFilter(string[index])) { // check if string[index] is a letter
      reverseStr += string[index].toLowerCase(); // if it is, concatenate the character in lowercase with reverseStr
    }

    return palindrome(string, index - 1, reverseStr);  // return palindrome with string, index minus one, and reverseStr passed in
}


function letterFilter(string) { // takes in a string, outputs that string with only letters
  let temp = ''
  for (let i = 0; i < string.length; i++) { // iterate through the string
    if (isLetter(string[i])) {  // if the character is a letter, concat that with the new variable
      temp += string[i].toLowerCase();
    }
  }

  return temp;
}

function isLetter(char) { // checks if input character is a special character or not - 
  return char.toUpperCase() !== char.toLowerCase() // returns true if it is a letter
}





// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); //-> true
// console.log(palindrome("jmoney")); //-> false

// RECURSION ALGO:
// Create a function called halveCount, which accepts two integers (numA and numB) and returns how many times numA can be halved while still being greater than numB.
// Notes: numA will always be at least greater than the twice of numB.
// You are expected to solve this challenge via a recursive approach.



const halveCount = (numA, numB, counter = 0) => {
  // base case: if 1/2 of numA < numB, return counter;
  if ((numA/2) < numB) return counter;
  // recursive case: 
  return halveCount(numA / 2, numB, counter + 1)
  // return function with numA / 2, counter + 1
}







// // TESTS:
// console.log(halveCount(4666, 544)) //should log 3
// // (4666 -> 2333 -> 1166.5 -> 583.25)
// console.log(halveCount(466, 54)) //should log 3
// // (466 -> 233 -> 116.5 -> 58.25)
// console.log(halveCount(1324, 98)) //should log 3
// // (1324 -> 662 -> 331 -> 165.5)
// console.log(halveCount(624, 8)) //should log 6
// // (624 -> 312 -> 156 -> 78 -> 39 -> 19.5 -> 9.75)
// console.log (halveCount(1000, 3)) //should log 8
// (1000 -> 500 -> 250 -> 125 -> 62.5 -> 31.25 -> 15.625 -> 7.8125 -> 3.90625)

// CLOSURE ALGO:
// Create a function called makePlusFunction, which takes a “base number” as an argument.
// This function should return another function which takes a new argument,
// and returns the sum of the “base number” and the new argument.
// TESTS:

const makePlusFunction = (base) => {

  return function (num2) {

    return base + num2;

  }
}



// const plusFive = makePlusFunction(5)
// const plusTen = makePlusFunction(10)
// console.log(plusFive(2))
//  // should log 7
// console.log(plusFive(-8))
//  // should log -3
// console.log(plusTen(0))
//  // should log 10
// console.log(plusTen(188))
//  // should log 198
// console.log(plusFive(plusTen(0)))
//  // should log 15

// FIND MODE

// Given an array, return its mode (the number that appears most often)
// If there is a tie, return the greater number of tied modes.
// ex. mode([1,1,2,2,3,3,2,4,5]) === 2 // true because 2 appears most often in the array (the number 2 appears 3 times)
// ex. mode([1,1,1,3,3,3]) === 3 // true, because 3 and 1 are tied as the mode, but 3 > 1 and the mode function will return the greater of the mode values
function mode(array) {
  let cache = {};
  for (let i of array) {
    if (!cache[i]) cache[i] = 0;
    cache[i]++; 
  }
  
  let index = 0;
  let max = cache[0]

  for (let x in cache){
    if (cache[x] > max) {
      max = cache[x];
      index = x;
    }
  }

  return cache[index];
}

// Extension: solve this in 0(n) time

function modeTests() {
  console.log(mode([1,2,2,1,1,3, 7, 3]), ' -> 1');
  console.log(mode([1]), '1');
  console.log(mode([2, 2, 2, 2, 3, 3, 3]), ' -> 2');
}


modeTests() // uncomment to test!