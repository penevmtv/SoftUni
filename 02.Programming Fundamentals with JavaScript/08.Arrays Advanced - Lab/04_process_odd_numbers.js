// You are given an array of numbers. Write a function that prints the elements at odd positions from the array,
//  doubled and in reverse order.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.



function processOddNumbers(arrOfNums) {
    let resultArr = [];
    for (let index in arrOfNums) {
        if (index % 2 !== 0) {
            let doubledNum = arrOfNums[index] * 2;
            resultArr.unshift(doubledNum);
        }
    }
    return resultArr.join(` `);
}
console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));
