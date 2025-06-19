//You will be given an array of integer numbers on the first line of the input.

//Remove all repeating elements from the array. 

//Print the result elements separated by a single space.

function distinctArray(arrOfIntegers) {
  let result = [];
  for (let el of arrOfIntegers) {
    if (!(result.includes(el))) {
      result.push(el);
    }
  }
  return result.join(` `);
}
console.log(distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]));
