// Write a function that prints the first k and the last k elements from an array of numbers.
// The input comes as an array of number elements. The first element represents the number k, 
// all other elements are from the array that needs to be processed.
// The output is printed on the console on two lines. On the first line, print the first k elements, 
// separated by space. On the second line, print the last k elements, separated by space



function firstAndLastKNumbers(arrNum) {
    let numK = arrNum.shift();
    let firstK = arrNum.slice(0, numK);
    let lastK = arrNum.slice(arrNum.length - numK);

    console.log(firstK.join(` `));
    console.log(lastK.join(` `));
    
}
firstAndLastKNumbers([2, 
7, 8, 9]
);