//Write a function to find all the top integers in an array. 
//A top integer is an integer, which is bigger than all the elements to its right. 

//Output
//Print all top integers on the console, separated by a single space.


function solve(arr) {
  let lastNum = arr[arr.length - 1];
  let maxNum = lastNum;
  let newArray = [lastNum];
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > maxNum) {
      newArray.push(arr[i]);
      maxNum = arr[i];
    }
  }
  console.log(newArray.reverse().join(` `));
}