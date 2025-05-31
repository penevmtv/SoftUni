// Write a function, which prints common elements in two string arrays. Print all matches on separate lines. 
// Compare the first array with the second array.


function solve(arr1, arr2) {
    for (let element1 of arr1) {
        for (let element2 of arr2) {
            if (element1 === element2) {
                console.log(element1);
            }
        }
    }
}


function solve(arr1, arr2) {
    for (let element1 of arr1) {
        if (arr2.includes(element1)) {console.log(element1);}
    }
}


function solve(arr1, arr2) {
    for (let index1 = 0; index1 < arr1.length; index1++) {
        for (let index2 = 0; index2 < arr2.length; index2++) {
            if (arr1[index1] === arr2[index2]) {
                console.log(arr1[index1]);
            }
        }
    }
}
