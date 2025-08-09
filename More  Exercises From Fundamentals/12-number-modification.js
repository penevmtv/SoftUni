// Write a JS program that changes a number until the average of all its digits is not higher than 5. 
// To modify the number, your program should append a 9 to the end of the number, when the average value
//  of all its digits is higher than 5 the program should stop appending. 
// The input is a single number.
// The output should consist of a single number - the final modified number which has an average value
//  of all its digits higher than 5. The output should be printed on the console.
// Constraints
// •	The input number will consist of no more than 6 digits.
// •	The input will be a valid number (there will be no leading zeroes).




function numberModification(number) {

    function modify(x) {
        x = Number(x + `9`);
        return x;
    }
    
    function average(x) {
        let nArr = String(x).split(``);
        let nSum = 0;

        for (let num of nArr) {
            nSum += Number(num);
        }

        let averageNum = nSum / nArr.length;

        return averageNum
    }

    while (average(number) <= 5) {

        number = modify(number);
    }

    return number;
}
console.log(numberModification(101));
