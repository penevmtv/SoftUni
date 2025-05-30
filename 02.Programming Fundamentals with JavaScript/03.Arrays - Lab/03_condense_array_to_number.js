//Write a program, which receives an array of numbers, and condenses them by summing
//adjacent couples of elements until a single number is obtained. 

//Examples

//For example, if we have 3 elements [2, 10, 3], we sum the first two and the second
//two elements and obtain {2+10, 10+3} = {12, 13}, then we sum again all adjacent elements
//and obtain {12+13} = {25}.


function solve(arr) {
  let condensedNums = arr;
  while (condensedNums.length !== 1) {
    let newArr = [];
    for (let i = 0; i < condensedNums.length - 1; i++) {
      newArr[i] = condensedNums[i] + condensedNums[i + 1];
    }
    condensedNums = newArr;
  }
  console.log(condensedNums[0]);
}