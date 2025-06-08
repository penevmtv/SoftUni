// Write a function that extracts only those numbers that form a non-decreasing subset. In other words, you start from the first
//  element and continue to the end of the given array of numbers. Any number which is LESS THAN the current biggest one is ignored,
//   alternatively if it’s equal or higher than the current biggest one you set it as the current biggest one and you continue to 
//   the next number. 
// Input
// The input comes as an array of numbers.
// Output
// The output is the processed array after the filtration, which should be a non-decreasing subset. The elements should be printed
//  on one line, separated by a single space.




function solve(arr) {
    let biggestOne = Number(arr[0]);
    let newArr = [biggestOne];
    for (let i = 1; i < arr.length; i++) {
        let currentNum = Number(arr[i]);
        if (currentNum >= biggestOne) {
            biggestOne = currentNum;
            newArr.push(biggestOne);
        }
    }
    console.log(newArr.join(` `));
}

// Second solution:

function solve(arr) {
    let currentMax = arr[0];
    let result = [currentMax];
    result = arr.filter(num => {
        if (num >= currentMax) {
            currentMax = num;
            return true;
        }
        return false;
    });
    console.log(result.join(' '));
}