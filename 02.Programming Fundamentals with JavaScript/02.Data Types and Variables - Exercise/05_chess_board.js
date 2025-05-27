//Write a function to print a chessboard of size n X n. See the example for more information.

//The input comes as a single number argument n.

//The output should be returned as a result of your function in the form of a string.


function solve(n) {
let toPrint = ``;
  for (let row = 1; row <= n; row++) {
    for (let column = 1; column <= n; column++) {
      if (row % 2 !== 0) {
        if (column % 2 !== 0)
          toPrint += `#`;
        else 
          toPrint += ` `
      } else {
        if (column % 2 !== 0)
          toPrint += ` `;
        else 
          toPrint += `#`;
      }
    }
    toPrint += `\n`;
  }
  console.log(toPrint);
}

// Second solution:


function solve(n) {
let toPrint = ``;
  for (let row = 1; row <= n; row++) {
    for (let column = 1; column <= n; column++) {
      if ((row + column) % 2 === 0)
        toPrint += `#`;
      else 
        toPrint += ` `;
    }
    toPrint += `\n`;
  }
  console.log(toPrint);
}