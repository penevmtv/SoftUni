// Write a function that prints the two smallest elements from an array of numbers.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.



function smallestTwoNumbers(arrOfNums) {
    let arrOfAllSmallestNums = arrOfNums.sort((a, b) => a - b);
    let arrOfSmallestTwoNums = arrOfAllSmallestNums.slice(0, 2);
    return arrOfSmallestTwoNums.join(` `)
}
console.log(smallestTwoNumbers([30, 15, 50, 5]));
