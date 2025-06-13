// You will receive three integer numbers. 
// Write a function sum() to calculate the sum of the first two integers and a function subtract(),
//  which subtracts the result of the function sum() and the third integer.


function addAndSubtract(num1, num2, num3) {
    let sum = (x, y) => x + y;
    let subtract = (a, b) => a - b;

    let sumFirstNums = sum(num1, num2);

    let result = subtract(sumFirstNums, num3);

    console.log(result);
}
addAndSubtract(23, 6, 10);
