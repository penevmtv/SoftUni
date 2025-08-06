// Write a function that generates a Spirally filled matrix with numbers, with given dimensions.
// Input
// The input comes as 2 numbers that represent the dimension of the matrix. 
// Output
// The output is the matrix filled spirally starting from 1. You need to print every row on a new line, with the cells separated by a space.




function spiralMatrix(nRows, nCols) {

    let startRow = 0;
    let endRow = nRows -1;
    let startCol = 0;
    let endCol = nCols -1;

    let resultMatrix = [...Array(nRows)].map(() => [...Array(nCols)].fill(0));

    let counter = 1;

    while (counter <= nRows * nCols) {

        for (let i = startCol; i <= endCol; i++) {
            resultMatrix[startRow][i] = counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            resultMatrix[i][endCol] = counter++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            resultMatrix[endRow][i] = counter++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            resultMatrix[i][startCol] = counter++;
        }
        startCol++;
    }

    resultMatrix.forEach(x => console.log(x.join(` `)));
 }
spiralMatrix(5, 5);
