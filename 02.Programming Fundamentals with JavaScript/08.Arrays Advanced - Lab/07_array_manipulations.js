// Write a function that manipulates an array of numbers. 
// •	Add {number}: add a number to the end of the array
// •	Remove {number}: remove all occurrences of a particular number from the array
// •	RemoveAt {index}: removes number at a given index
// •	Insert {number} {index}: inserts a number at a given index
// Note: All the indices will be valid!
// The input comes as an array of strings. The first element will be a string containing the array to manipulate. 
// Every other command you receive will also be a string.
// The output is the manipulated array printed on the console on a single line, separated by space.



function arrayManipulations(arrOfStrings) {
    let arrToManipulate = arrOfStrings.shift().split(` `);

    for (let i = 0; i < arrOfStrings.length; i++) {

        let input = arrOfStrings[i].split(` `);
        let [command, num, secondNum] = input;

        switch (command) {
            case `Add`:
                arrToManipulate.push(num); 
                break;
            case `Remove`:
                arrToManipulate = arrToManipulate.filter(el => el !== num);
                break;
            case `RemoveAt`:
                arrToManipulate.splice(Number(num), 1);
                break;
            case `Insert`:
                arrToManipulate.splice(Number(secondNum), 0, num);
                break;
        }
    }
    return arrToManipulate.join(` `);
}
