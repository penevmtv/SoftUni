//Write a function that rotates an array. The array should be rotated to the right side,
//meaning that the last element should become the first, upon rotation. 

//The input comes as an array of strings. The last element of the array is the amount of rotation you need to perform.

//The output is the resulting array after the rotations. The elements should be printed on one line, separated by a single space.


function solve(arr) {
  let nRotations = Number(arr.pop());
  let array = arr.slice();
  for (let i = 0; i < nRotations; i++) {
    let lastElement = array.pop();
    array.unshift(lastElement);
  }
  console.log(array.join(' '));
}