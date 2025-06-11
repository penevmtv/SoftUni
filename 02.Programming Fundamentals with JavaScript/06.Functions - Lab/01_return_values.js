// Write a function that receives a grade between 2.00 and 6.00 and prints a formatted line with grade and description.
// •	< 3.00 - "Fail"
// •	>= 3.00 and < 3.50 - "Poor"
// •	>= 3.50 and < 4.50 - "Good"
// •	>= 4.50 and < 5.50 - "Very good"
// •	>= 5.50 - "Excellent"



function formatGrade(grade) {
    grade = grade.toFixed(2);
    if (grade < 3) {
        console.log(`Fail (2)`);
    } else if (grade < 3.50) {
        console.log(`Poor (${grade})`);
    } else if (grade < 4.50) {
        console.log(`Good (${grade})`);
    } else if (grade < 5.50) {
        console.log(`Very good (${grade})`);
    } else {
        console.log(`Excellent (${grade})`);
    }
}


//Write a function that calculates and print the value of a number raised to a given power:

function printMathPower(number, power) {
    let result = 1;
    for (let i = 1; i <= power; i++) {
        result *= number;
    }
    console.log(result);

    // console.log(Math.pow(number, power));

    // console.log(number ** power);
}


//Write a function that receives a string and a repeat count n. The function should return a new string (the old one repeated n times).
//Use the return operator to produce the result.

function repeatString(string, repeatN) {
    let result = ``;
    for (let i = 1; i <= repeatN; i++) {
        result += string;
    }
    return result;
}
let finalString = repeatString(`abc`, 3)
console.log(finalString);