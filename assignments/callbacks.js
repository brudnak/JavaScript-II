// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming
Object.defineProperty(Array.prototype, 'last', {
  get: function() { return this[this.length - 1] }
})
// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  return cb(arr.length)
}
getLength(items, e => console.log(e))

// Special
function last(arr, cb) {
  return cb(arr.last)
}
last(items, e => console.log(e))

function sumNums(x, y, cb) {
  return cb(x + y)
}
sumNums(18, 1, e => console.log(e))

function multiplyNums(x, y, cb) {
  return cb(x * y)
}
multiplyNums(2, 6, e => console.log(e))

function contains(item, list, cb) {
  return cb(list.includes(item))
}
contains('Notebook', items, e => console.log(e))

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
