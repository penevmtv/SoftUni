// Write a function that receives an array of integers and an array of string commands and executes them over the array. The commands are as follows:
// •	add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).
// •	addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
// •	contains <element> – prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.
// •	remove <index> – removes the element at the specified index.
// •	shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
// o	For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
// •	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
// o	For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
// •	print – stop receiving more commands and print the last state of the array in the following format:
//          `[ {element1}, {element2}, …elementN} ]`
//   Note: The elements in the array must be joined by comma and space (, ).



function arrayManipulator(arrOfIntegers, arrOfCommands) {
    let copyArrOfInt = arrOfIntegers.slice();

    function add(startIndex, element, array) {
        array.splice(startIndex, 0, element);
        return array;
    }

    function addMany(startIndex, arrOfElements, array) {

        for (let i = 0; i < arrOfElements.length; i++) {
            add(startIndex, arrOfElements[i], array);
            startIndex++;
        }
        return array;
    }
    
    function contains(element, array) {
        console.log(array.indexOf(element));
    }

    function remove(index, array) {
        array.splice(index, 1);
        return array;
    }

    function shift(nShifts, array) {
        nShifts = nShifts % array.length;
        for (let i = 1; i <= nShifts; i++) {
            let elementToShift = array.shift();
            array.push(elementToShift);
        }
        return array;
    }

    function sumPairs(array) {
        let newArray = [];
        for (let i = 0; i < array.length; i += 2) {
            if (i + 1 < array.length) { 
                let newElement = array[i] + array[i + 1];
                newArray.push(newElement);
            } else {
                newArray.push(array[i]);
            }
        }
        return newArray;
    }


let index = 0;
while (arrOfCommands[index] !== `print`) {
    let command = arrOfCommands[index].split(` `);

    if (command.includes(`add`)) {
        let startIndex = Number(command[1]);
        let element = Number(command[2]);
        copyArrOfInt = add(startIndex, element, copyArrOfInt);
    } else if (command.includes(`addMany`)) {
        let arrOfElements = command.slice(1).map(Number);
        let startIndex = arrOfElements.shift();
        copyArrOfInt = addMany(startIndex, arrOfElements, copyArrOfInt);
    } else if (command.includes(`contains`)) {
        let element = Number(command[1]);
        contains(element, copyArrOfInt);
    } else if (command.includes(`remove`)) {
        let index = Number(command[1]);
        copyArrOfInt = remove(index, copyArrOfInt);
    } else if (command.includes(`shift`)) {
        let nShifts = Number(command[1]);
        copyArrOfInt = shift(nShifts, copyArrOfInt);
    } else if (command.includes(`sumPairs`)) {
        copyArrOfInt = sumPairs(copyArrOfInt);
    }
    index++;
}
let strArr = copyArrOfInt.join(`, `);
let stringResult = `[ ${strArr} ]`;
return stringResult;
}
console.log(arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
));
