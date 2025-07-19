//Write a function that receives a single string and replace any sequence of the same letters with a single corresponding letter.



function replaceRepeatingChars(string) {
    let newString = ``;

    for (let char of string) {
        if (!newString.endsWith(char)) {
            newString += char;
        }
    }      
    return newString;
}
console.log(replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa'));
