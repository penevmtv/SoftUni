// The input will be a single string.
// Write a function that cuts the given string into half and reverse the two halves. 
// Print each half on a separate line.




function cutAndReverse(string) {
    let firstHalf = ``;
    let secondHalf = ``;

    for (let i = string.length - 1; i >= 0; i--) {
        if (i > (string.length - 1) / 2) {
            secondHalf += string[i];
        } else {
            firstHalf += string[i];
        }
    }

    return `${firstHalf}\n${secondHalf}`;
}
console.log(cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT'));
