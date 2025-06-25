// You are given an array with integers. Write a program to modify the elements after receiving the following commands:
// · "swap {index1} {index2}" takes two elements and swap their places.
// · "multiply {index1} {index2}" takes element at the 1st index and multiply it with the element at 2nd index. Save the product at the 1st index.
// · "decrease" decreases all elements in the array with 1.
// Input
// On the first input line, you will be given the initial array values separated by a single space.
// On the next lines, you will receive commands until you receive the command "end". The commands are as follows:
// · "swap {index1} {index2}"
// · "multiply {index1} {index2}"
// · "decrease"
// Output
// The output should be printed on the console and consist of elements of the modified array – separated by a comma and a single space ", ".
// Constraints
// · Elements of the array will be integer numbers in the range [-231...231].
// · Count of the array elements will be in the range [2...100].
// · Indexes will be always in the range of the array.




function arrayModifier(arrOfStrings) {
    let copyArrOfStrings = arrOfStrings.slice();

    let arrOfIntegers = copyArrOfStrings.shift().split(` `);

    let index = 0;
    while (copyArrOfStrings[index] !== `end`) {
        let commandString = copyArrOfStrings[index].split(` `);

        if (commandString.length > 1) {
            let [command, index1, index2] = commandString;
            let element1 = arrOfIntegers[Number(index1)];
            let element2 = arrOfIntegers[Number(index2)];

            switch (command) {
                case `swap`:
                    arrOfIntegers.splice(index1, 1, element2);
                    arrOfIntegers.splice(index2, 1, element1);
                    break;
                case `multiply`:
                    let result = element1 * element2;
                    arrOfIntegers.splice(index1, 1, result);
                    break;
            }
        } else {
            arrOfIntegers = arrOfIntegers.map(x => x - 1);
        }

        index++;
    }
    return arrOfIntegers.join(`, `);
}
console.log(arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease', 'end']));
