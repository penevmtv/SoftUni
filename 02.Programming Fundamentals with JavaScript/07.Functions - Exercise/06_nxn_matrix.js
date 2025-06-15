// Write a function that receives a single integer number n and prints nxn matrix with that number.

function nxnMatrix(n) {

    function rows(num) {
        let toPrint = [];
        for (let i = 1; i <= num; i++) {
            toPrint.push(num);
        }
        return toPrint.join(` `);
    }

    function columns(num) {
        for (let i = 1; i <= num; i++) {
            console.log(rows(num));
        }
    }

    return columns(n);
}
