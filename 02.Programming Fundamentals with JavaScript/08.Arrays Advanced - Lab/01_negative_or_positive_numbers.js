// Write a function that processes the elements in an array one by one and produces a new array. 
// Prepend each negative element at the front of the array (as the first element) and append each positive (or 0)
//  element at the end of the array.
// The input comes as an array of string elements holding numbers.
// The output is printed on the console, each element on a new line.



function negativeOrPositiveNumbers(array) {
    let numbersArray = array.map(Number);
    let newArray = [];

    for (let number of numbersArray) {
        if (number < 0) {
            newArray.unshift(number);
        } else {
            newArray.push(number);
        }
    }
    return newArray.join(`\n`);
}
console.log(negativeOrPositiveNumbers(['3', '-2', '0', '-1']));