// Write a program that receives a number n.  For all numbers in the range [1…n] print the number and if it is special or not (True / False).
// •	A number is special when its sum of digits is 5, 7 or 11.


function solve(n) {
    for (let currentNum = 1; currentNum <= n; currentNum++) {
        let stringCurrentNum = String(currentNum);
        let sum = 0;
        for (let currentDigit = 0; currentDigit < stringCurrentNum.length; currentDigit++) {
            sum += Number(stringCurrentNum[currentDigit]);
        }
        if (sum === 5 || sum === 7 || sum === 11) 
            console.log(`${currentNum} -> True`);
        else 
            console.log(`${currentNum} -> False`);
    }
}