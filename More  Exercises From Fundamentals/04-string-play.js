function solve(arrOfStrs) {
    let text = arrOfStrs.shift();

    for (let input of arrOfStrs) {
        if (input === `Done`) break;

        let inputArr = input.split(` `);
        let command = inputArr.shift();

        switch (command) {
            case `Change`:
                let [char, replacement] = inputArr;
                text = text.replaceAll(char, replacement);
                console.log(text);
                break;
            case `Includes`:
                let substring = inputArr.shift();
                if (text.includes(substring)) {
                    console.log(`True`);
                } else {
                    console.log(`False`);
                }
                break;
            case `End`:
                let string = inputArr.shift();
                if (text.endsWith(string)) {
                    console.log(`True`);
                } else {
                    console.log(`False`);
                }
                break;
            case `Uppercase`:
                text = text.toUpperCase();
                console.log(text);
                break;
            case `FindIndex`:
                let givenChar = inputArr.shift();
                console.log(text.indexOf(givenChar));
                break;
            case `Cut`:
                let startIndex = Number(inputArr[0]);
                let count = Number(inputArr[1]);
                text = text.slice(startIndex, startIndex + count);
                console.log(text);
                break;
        }
    }
}
solve(["//Th1s 1s my str1ng!//",
    "Change 1 i",
    "Includes string",
    "End my",
    "Uppercase",
    "FindIndex I",
    "Cut 5 5",
    "Done"]);
