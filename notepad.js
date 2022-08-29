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





console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(palindrome("llama mall")); //-> true
console.log(palindrome("jmoney")); //-> false