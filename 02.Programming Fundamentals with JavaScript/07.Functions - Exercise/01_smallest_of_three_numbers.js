// Write a function that receives three integers and prints the smallest number.
//  Use an appropriate name for the function.

function smallestOfThreeNumbers(firstNum, secondNum, thirdNum) {
    function smallestOfTwoNum(x, y) {
        result = x > y ? y : x;
        return result;
    }
    let smallestNum = smallestOfTwoNum(smallestOfTwoNum(firstNum, secondNum), thirdNum);
    console.log(smallestNum);
}
smallestOfThreeNumbers(2, 5, 3);
