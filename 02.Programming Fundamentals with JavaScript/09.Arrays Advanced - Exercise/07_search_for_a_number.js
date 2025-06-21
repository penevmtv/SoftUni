// You will receive two arrays of integers. The second array is containing exactly three numbers. 
// The first number represents the number of elements you have to take from the first array (starting from the first one).
// The second number represents the number of elements you have to delete from the numbers you took (starting from the first one). 
// The third number is the number we search in our collection after the manipulations. 
// As output print how many times that number occurs in our array in the following format: 
// "Number {number} occurs {count} times."


function searchForNum(arrOfIntegers, arrOfIntForManipul) {

    let [nElementsToTake, nElementsToDelete, searchingNum] = arrOfIntForManipul;

    let newArray = arrOfIntegers.slice(0, nElementsToTake);

    newArray.splice(0, nElementsToDelete);

    arrOfSearchingNums = newArray.filter(x => x === searchingNum);

    let searchingNumCount = arrOfSearchingNums.length;
    
    return `Number ${searchingNum} occurs ${searchingNumCount} times.`
}
console.log(searchForNum([7, 1, 5, 8, 2, 7],
[3, 1, 5]
));