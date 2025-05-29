// Write a program, which receives an array of strings. Your task is to reverse the array without creating a new array 
// and without using ".reverse". Print the resulting elements on a single line, space-separated. 



function solve(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let firstHalfIndex = arr[arr.length - 1 - i];
        let secondHalfIndex = arr[i];
        arr[i] = firstHalfIndex;
        arr[arr.length - 1 - i] = secondHalfIndex;
    }
    console.log(arr.join(` `));
}


function solve(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let reversedIndex = arr.length - 1 - i;
        let firstHalfIndex = arr[reversedIndex];
        let secondHalfIndex = arr[i];
        arr[i] = firstHalfIndex;
        arr[reversedIndex] = secondHalfIndex;
    }
    console.log(arr.join(` `));
}