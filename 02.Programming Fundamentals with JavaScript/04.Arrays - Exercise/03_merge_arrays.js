// Write a function, which receives two string arrays and merges them into a third array.  
// •	If the index of the element is even, add into the third array the sum of both elements at that index
// •	If the index of the element is odd, add the concatenation of both elements at that index
// Input
// As input, you will receive two string arrays (with equal length).
// Output
// As output, you should print the resulting third array, each element separated by " - ".



function solve(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            arr3[i] = Number(arr1[i]) + Number(arr2[i]);
        } else {
            arr3[i] = arr1[i] + arr2[i];
        }
    }
    console.log(arr3.join(` - `));
}

// Second solution:


function solve(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            arr3.push(Number(arr1[i]) + Number(arr2[i]));
        } else {
            arr3.push(arr1[i] + arr2[i]);
        }
    }
    console.log(arr3.join(` - `));
}
