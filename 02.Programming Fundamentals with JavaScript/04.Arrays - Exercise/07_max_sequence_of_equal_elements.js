//Write a function that finds the longest sequence of equal
//elements in an array of numbers. 

//If several longest sequences exist, print the leftmost one.


function solve(arr) {
  let longestSequence = [];
  let lastSequence = [];
  for (let num = 0; num < arr.length - 1; num++) {;
    if (arr[num] === arr[num + 1]) {
      lastSequence[0] = arr[num];
      lastSequence.push(arr[num]);
    } else {
      if (lastSequence.length > longestSequence.length) {
      longestSequence = lastSequence;
      }
      lastSequence = [];
    }
  }
  console.log(longestSequence.join(` `));
}