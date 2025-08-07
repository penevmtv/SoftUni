// Write a function that reads a given matrix of numbers, and checks if both main diagonals have an equal sum. 
// If they have, set every element that is NOT part of the main diagonals to that sum, alternatively just print the matrix unchanged.
// Input
// The input comes as an array of strings. Each element represents a string of numbers, with spaces between them. 
// Parse it into a matrix of numbers, so you can work with it.
// Output
// The output is either the new matrix, with all cells not belonging to a main diagonal changed to the diagonal sum,
//  or the original matrix if the two diagonals have different sums. You need to print every row on a new line,
//   with cells separated by a space. Check the examples below. 




function diagonalAttack(arrOfStrs) {

    const nRows = arrOfStrs.length;
    const nCols = arrOfStrs[0].split(` `).length;

    let arrOfArrs = arrOfStrs.map(x => x.split(` `).map(Number));

    let uppDiagSum = 0;
    let downDiagSum = 0; 
    
    let rowFirstDiag = 0;
    let rowLastDiag = nRows - 1;
    for (let i = 0; i < nCols; i++) {

        let firstDiagNum = arrOfArrs[rowFirstDiag][i];

        uppDiagSum += firstDiagNum;
        arrOfArrs[rowFirstDiag][i] = String(firstDiagNum);
        rowFirstDiag++;

        let lastDiagNum = Number(arrOfArrs[rowLastDiag][i]);

        downDiagSum += lastDiagNum;
        arrOfArrs[rowLastDiag][i] = String(lastDiagNum);
        rowLastDiag--;
    }

    if (uppDiagSum !== downDiagSum) return arrOfStrs.forEach(x => console.log(x));
    
    for (let i = 0; i < nRows; i++) {
        for (let j = 0; j < nCols; j++) {
            let currentNum = arrOfArrs[i][j]
            if (currentNum === Number(currentNum)) {
                arrOfArrs[i][j] = uppDiagSum;
            } 
        }
    }
    
    return arrOfArrs.forEach(x => console.log(x.join(` `)));
}
diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);
