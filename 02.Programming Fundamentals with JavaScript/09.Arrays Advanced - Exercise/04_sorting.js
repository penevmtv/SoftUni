// Write a function that sorts an array of numbers so that the first element is the biggest one, the second is the smallest one, 
// the third is the second biggest one, and the fourth is the second smallest one, and so on. 
// Print the elements on one row, separated by a single space.



function sorting(arrOfNums) {
    let midleOfArrOfNums = Math.ceil(arrOfNums.length / 2);
    arrOfNums.sort((a, b) => a - b);
    let sortedArr = [];
    
    for (let i = 0; i < midleOfArrOfNums; i++) {
        let maxNum = arrOfNums.pop();
        sortedArr.push(maxNum);

        if (arrOfNums.length > 0) { 
            let minNum = arrOfNums.shift();
            sortedArr.push(minNum);
        }
    }
    return sortedArr.join(` `)
}
console.log(sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));

// with while loop :

function sorting(arrOfNums) {
    
    arrOfNums.sort((a, b) => a - b);
    let sortedArr = [];
    
    while (arrOfNums.length > 0) {
        let maxNum = arrOfNums.pop();
        sortedArr.push(maxNum);

        if (arrOfNums.length > 0) { 
            let minNum = arrOfNums.shift();
            sortedArr.push(minNum);
        }
    }
    return sortedArr.join(` `)
}
console.log(sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 4, 94]));