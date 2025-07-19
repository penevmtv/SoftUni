// You will receive a single string. 
// This string is written in PascalCase format. Your task here is to split this string by every word in it. 
// Print them joined by comma and space.




function pascalCaseSplitter(string) {
    let newString = string[0];
    
    for (let i = 1; i < string.length; i++) {
        let currentChar = string[i];
        if (currentChar === currentChar.toUpperCase()) {
            newString += `, ` + currentChar;
        } else {
            newString += currentChar;
        }
    }
    return newString;
}
console.log(pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan'));
