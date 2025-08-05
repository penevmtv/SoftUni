// Write a function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal. 
// Input
// The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
// Output
// The output is a Boolean result indicating whether the matrix is magical or not.




function magicMatrices(arrOfArrays) {
    const nColAndRows = arrOfArrays.length;

    let sum = arrOfArrays[0].reduce((sum, x) => sum += x, 0);
    let isMagical = true;

    for (let i = 0; i < nColAndRows; i++) {
        let colSum = 0;
        let rowSum = 0;
        
        for (let j = 0; j < nColAndRows; j++) {
            colSum += arrOfArrays[j][i];
            rowSum += arrOfArrays[i][j];
        }
        
        if (colSum !== sum || rowSum !== sum) {
            isMagical = false;
            break;
        }
    }

    console.log(isMagical);
}
magicMatrices([
 [4, 5, 6],
 [6, 5, 4],
 [5, 5, 5]]
);
