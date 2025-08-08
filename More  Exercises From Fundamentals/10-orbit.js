// You will be given an empty rectangular space of cells. Then you will be given the position of a star. You need to build the orbits around it.
// You will be given a coordinate of a cell, which will always be inside the matrix, on which you will put the value - 1. 
// Then you must set the values of the cells directly surrounding that cell, including the diagonals, to 2. 
// After which you must set the values of the next surrounding cells to 3 and so on. 
// The input comes as an array of 4 numbers [width, height, x, y], which represents the dimensions of the matrix and the coordinates of the star.
// Output
// The output is the filled matrix, with the cells separated by a space, each row on a new line.




function orbit(inputArray) {

    let [width, height, starRow, starCol] = inputArray;

    let matrix = [];

    for (let i = 0; i < height; i++) {
        let matrixRow = [];

        for (let j = 0; j < width; j++) {
            let value = Math.max(Math.abs(i - starRow), Math.abs(j - starCol)) + 1;
            matrixRow.push(value);
        }
        matrix.push(matrixRow);
    }

    return matrix.forEach(x => console.log(x.join(` `)))
}
orbit([5, 5, 2, 2]);
