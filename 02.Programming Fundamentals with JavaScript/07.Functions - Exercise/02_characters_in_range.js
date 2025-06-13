// Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code.
//  Keep in mind that the second character code might be before the first one inside the ASCII table.


function charactersInRange(char1, char2) {
    let numOfChar1 = char1.charCodeAt();
    let numOfChar2 = char2.charCodeAt();

    let smallestNum = Math.min(numOfChar1, numOfChar2);
    let biggestNum = (numOfChar1 + numOfChar2) - smallestNum;

    function ASCIIRange(firstNum, secondNum) {
        let numArr = [];
        for (let i = firstNum + 1; i < secondNum; i++) {
            let currentchar = String.fromCharCode(i);
            numArr.push(currentchar);
        }
        return numArr;
    }
    
    let result = ASCIIRange(smallestNum, biggestNum);
    console.log(result.join(` `));
}
charactersInRange('a', 'd');