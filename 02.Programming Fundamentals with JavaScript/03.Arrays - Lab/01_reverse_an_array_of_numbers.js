// Write a program, which receives a number n and an array of elements. Your task is to create a new array
//  with n numbers from the original array, reverse it and print its elements on a single line, space-separated.


function solve(n, arr) {
    let newArray = [];
    for (let i = 0; i < n; i++) {
        newArray.push(arr[i]); 
    }
    console.log(newArray.reverse().join(` `));
}

// Second solution:

function solve(n, arr) {
    let newArray = [];
    for (let i = 0; i < n; i++) {
        newArray.push(arr[i]); 
    }
    let newReverseArr = [];
    for (let i = newArray.length - 1; i >= 0; i--) {
        newReverseArr.push(newArray[i]);
    }
    console.log(newReverseArr.join(` `));
}

// Third solution:


function solve(n, arr) {
    let newArray = [];
    for (let i = 0; i < n; i++) {
        newArray.push(arr[i]); 
    }
    let newReverseArr = [];
    for (let i = 0; i < newArray.length; i++) {
        newReverseArr[i] = newArray[newArray.length - 1 - i];
    }
    console.log(newReverseArr.join(` `));
}