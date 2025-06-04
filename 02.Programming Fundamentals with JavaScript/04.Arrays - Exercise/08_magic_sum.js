//Write a function, which prints all unique pairs in an array
//of integers whose sum is equal to a given number.

function solve(arr, num) {
  for (let n1 = 0; n1 < arr.length - 1; n1++) {
    for (let n2 = n1 + 1; n2 < arr.length; n2++) {
      if (arr[n1] + arr[n2] === num) {
        //console.log(`${arr[n1]} ${arr[n2]}`);
        let result = [];
        result[0] = arr[n1];
        result[1] = arr[n2];
        console.log(result.join(` `));
      }
    }  
  }
}