// Write a program that receives a string of number n and print all triples
//  of the first n small Latin letters, ordered alphabetically:

function solve(strN) {
    const n = Number(strN);
    let toPrint = ``;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                toPrint += String.fromCharCode(97 + i);
                toPrint += String.fromCharCode(97 + j);
                toPrint += String.fromCharCode(97 + k);
                console.log(toPrint);
                toPrint = ``;
            }
        }
    }
}
