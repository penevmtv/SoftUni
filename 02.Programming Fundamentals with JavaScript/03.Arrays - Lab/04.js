// Write a program, which receives two string arrays containing number representations, and prints on the console whether they are identical.
// Arrays are identical if their elements at same indexes are equal. If they are identical, find the sum of the first array and print
//  the following message: 
// `Arrays are identical. Sum: {sum}`
//  If the arrays are NOT identical, find the first index where the arrays differ and print the following message:
//  `Arrays are not identical. Found difference at {index} index`




function solve (arr1, arr2) {
    let sumIfIdentical = 0;
    let differIndex = ``;
    let isIdentical = true;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            sumIfIdentical += parseInt(arr1[i]);
        } else {
            differIndex += i;
            isIdentical = false;
            break;
        }
    } 
    if (isIdentical) {
        console.log(`Arrays are identical. Sum: ${sumIfIdentical}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${differIndex} index`);
    }
}