// Write a function, which receives 3 parameters. Each parameter is a single character. Each parameter is a single character.
//  Read the characters and print them on one line, in reverse order.
// On the next line, print the ASCII values of each character in the reversed string, separated by a space.

// First solution:

function solve(a, b, c) {
    let reverseChar = c + b + a;
    console.log(reverseChar);
    let toPrint = ``;
    for (let i = 0; i < 3; i++) {
        toPrint += `${reverseChar.charCodeAt(i)} `;
    }
    console.log(toPrint);
}

// Second solution:

function solve(a, b, c) {
    console.log(c + b + a);
    console.log(`${c.charCodeAt(0)} ${b.charCodeAt(0)} ${a.charCodeAt(0)}`);
}