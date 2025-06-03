//Write a function that determines if there exists an element in the array of numbers such that
//the sum of the elements on its left is equal to the sum of the elements on its right. 

//If there are NO elements to the left/right, their sum is 0. 

//Print the index that satisfies the required condition or "no" if there is no such index.



function solve(arr) {
  let isEqual = false;
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }
    let rightSum = 0;
    for (let k = i + 1; k < arr.length; k++) {
      rightSum += arr[k];
    }
    if (leftSum === rightSum) {
      console.log(i);
      isEqual = true;
      break;
    }
  }
  if (!isEqual) {
    console.log(`no`);
  }
}