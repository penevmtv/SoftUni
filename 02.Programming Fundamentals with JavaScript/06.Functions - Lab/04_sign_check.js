// Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree is positive or negative.
//  Try to do this WITHOUT multiplying the 3 numbers.
// Input
// The input comes as parameters named numOne, numTwo, numThree.
// Output
// •	If the result is positive, print on the console -> "Positive"
// •	Otherwise, print -> "Negative"


function signCheck(numOne, numTwo, numThree) {
    const arrOfNums = [numOne, numTwo, numThree];
    let negativeNumsCount = 0;

    for (let currentNum of arrOfNums) {
        if (currentNum < 0) {negativeNumsCount++;}
    }

    if (negativeNumsCount === 1 || negativeNumsCount === 3) {
        return `Negative`;
    } else {
        return `Positive`;
    }
}
console.log(signCheck(5, 12, -15));





function signCheck(numOne, numTwo, numThree) {
    const arrOfNums = [numOne, numTwo, numThree];
    let negativeNumsCount = 0;

    for (let currentNum of arrOfNums) {
        if (currentNum < 0) {negativeNumsCount++;}
    }

    return  (negativeNumsCount === 1 || negativeNumsCount === 3) ? `Negative` : `Positive`;

}
console.log(signCheck(5, 12, -15));






function signCheck(numOne, numTwo, numThree) {
    
    function negativeNumsCount(n1, n2, n3) {
        const arrOfNums = [numOne, numTwo, numThree];
        let negativeCount = 0;

        for (let currentNum of arrOfNums) {
            if (currentNum < 0) { negativeCount++; }
        }
        return negativeCount;
    }

    return (negativeNumsCount(numOne, numTwo, numThree) === 1 || negativeNumsCount(numOne, numTwo, numThree) === 3) ? `Negative` : `Positive`;

}
console.log(signCheck(5, 12, -15));