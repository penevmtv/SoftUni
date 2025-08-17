// You will be given an encoded message and a template matrix for decoding it. The decoding is done by overlaying the template on top of the
//  stone with the message and performing an arithmetic operation with the numbers that overlap. Each pair of numbers (one from the message
//  and one from the template matrix) is added together and the resulting number is located on the wheel of letters (pictured to the You
//  may count more than one full revolution around the wheel (e.g. 6 is the same as 33 and so on). Repeat this process for all symbols of the message.
// If the decoding template matrix is smaller than the message, shift the template horizontally by as many cells as it is wide, so it covers the
//  next section of the message (see example). Once you reach the last column of the message matrix, if there are more rows left, shift the template
//  back to the first column, but offset it vertically by as many cells as it is high. See the example’s explanation for more information.
// Input
// You will receive an array of strings. The first element represents a number n, which is the length of the template matrix for decoding. 
// The next n elements represent rows in the decoding template matrix, with columns separated by space. The rest of the elements are all rows
//  of the encoded message matrix, with columns in each row separated by space.
// Output
// Print the decoded message in uppercase on a single line on the console. The final message is joined from all resulting cells, starting from top left,
//  going right, row by row. Trailing spaces are ignored.




function rosettaStone(arrOfStrs) {
    let workingArr = arrOfStrs.slice();

    const tempRows = Number(workingArr.shift());

    let templateArr = [];
    for (let i = 0; i < tempRows; i++) {
        const currentRow = workingArr.shift().split(` `).map(Number);
        templateArr.push(currentRow);
    }

    let matrix = workingArr.map(x => x.split(` `).map(Number));

    let result = '';

    for (let matrixRow = 0; matrixRow < matrix.length; matrixRow++) {
        for (let matrixCol = 0; matrixCol < matrix[0].length; matrixCol++) {

            const tRow = matrixRow % templateArr.length;
            const tCol = matrixCol % templateArr[0].length;

            const sum = matrix[matrixRow][matrixCol] + templateArr[tRow][tCol];

            if (sum === 0 || sum % 27 === 0) {
                result += ' ';
            } else {
                const code = sum % 27;
                result += String.fromCharCode(code + 64);
            }
        }
    }

    return result;
}
console.log(rosettaStone([
    '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']));
