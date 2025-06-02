//Write a function that receives an array and 
//the number of rotations you have to perform. 

//Note: Depending on the number of rotations,
//the first element goes to the end.

//Output
//Print the resulting array elements separated 
//by a single space.


function solve(arr, nRotations) {
  let newArr = [];
  let rotations = nRotations % arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (i < rotations) {
      newArr[arr.length - rotations + i] = arr[i];
    } else {
      newArr[i - rotations] = arr[i];
    }
  }
  console.log(newArr.join(` `));
}


//Second solution :


function solve(arr, nRotations) {
  let rotations = nRotations % arr.length;
  let newArr = [];
  for (let i = rotations; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  for (let i = 0; i < rotations; i++) {
    newArr.push(arr[i]);
  }
  console.log(newArr.join(` `));
}
