// You are given a field size and the indexes of ladybugs inside the field. A ladybug changes its position either to its left or to its right by a given fly length.
//  A command to a ladybug looks like this: "0 right 1". This means that the little insect placed on index 0 should fly one index to its right. If the ladybug lands 
//  on a fellow ladybug, it continues to fly in the same direction by the same fly length. If the ladybug flies out of the field, it is gone.
// For example, imagine you are given a field with size 3 and ladybugs on indexes 0 and 1. If the ladybug on index 0 needs to fly to its right by the length of 1 (0 right 1)
//  it will attempt to land on index 1 but as there is another ladybug there it will continue further to the right by an additional length of 1, landing on index 2. 
//  After that, if the same ladybug needs to fly to its right by the length of 1 (2 right 1), it will land somewhere outside of the field, so it flies away:

// If you are given a ladybug index that does not have a ladybug there, nothing happens. If you are given a ladybug index that is outside the field, nothing happens. 
// Your job is to create the program, simulating the ladybugs flying around doing nothing. In the end, print all cells in the field separated by blank spaces. 
// For each cell that has a ladybug on it print '1' and for each empty cell print '0'.
// Input
// •	You will receive an array of strings and the first element is an integer – the size of the field
// •	The second element is a string containing the initial indexes of all ladybugs separated by a blank space. The given indexes may or may not be inside the field range
// •	The next elements in the array are commands in the format:
//      "{ladybug index} {direction} {fly length}"
// Output
// •	Print the all cells within the field in format: `{cell} {cell} … {cell}`
// o	If a cell has a ladybug in it, print '1'
// o	If a cell is empty, print '0' 
// Constrains
// •	The size of the field will be in the range [0 … 1000].
// •	The ladybug indexes will be in the range [-2,147,483,647 … 2,147,483,647].
// •	The number of commands will be in the range [0 … 100].
// •	The fly length will be in the range [-2,147,483,647 … 2,147,483,647].

function ladybugs(arr) {
    
    const sizeOfTheField = Number(arr[0]);
    let ladybugsPosicion = arr[1].split(` `).map(Number);
    let resultField = [];
    for (let i = 0; i < sizeOfTheField; i++) {
        if (ladybugsPosicion.includes(i)) {
            resultField[i] = 1;
        } else {
            resultField[i] = 0;
        }
    } 
    
    for (let index = 2; index < arr.length; index++) {
        let commandArray = arr[index].split(` `);

        let ladybugIndex = Number(commandArray[0]);
        let direction = commandArray[1];
        let flyLength = Number(commandArray[2]);

        if (flyLength === 0) {continue;}
        
        if (resultField[ladybugIndex] === 1 && direction === `right`) {
            for (let i = ladybugIndex + flyLength; i < resultField.length; i += flyLength) {
                if (resultField[i] !== 1) {
                    resultField[i] = 1; 
                    break;
                }
            }
            resultField[ladybugIndex] = 0;
        } else if (resultField[ladybugIndex] === 1 && direction === `left`) {
            for (let i = ladybugIndex - flyLength; i >= 0; i -= flyLength) {
                if (resultField[i] !== 1) {
                    resultField[i] = 1; 
                    break;
                }
            }
            resultField[ladybugIndex] = 0;
        }
    }
    console.log(resultField.join(` `));
}