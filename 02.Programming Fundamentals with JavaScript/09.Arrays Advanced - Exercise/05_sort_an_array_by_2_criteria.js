//Write a function that orders an array of strings, by their length in ascending order as primary criteria, 
//and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.

//The input comes as an array of strings.

//The output is the ordered array of strings, each on a separate line.



function sortAnArray(arrOfStr) {
  let sortedArr = arrOfStr.sort((a, b) => a.length - b.length || a.localeCompare(b));
  return sortedArr.join(`\n`);
}
console.log(sortAnArray(['alpha', 'beta', 'gamma']));