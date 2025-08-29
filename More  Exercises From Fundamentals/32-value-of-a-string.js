// Write a function, which finds the sum of the ASCII codes of the letters in a given string.  
// Your tasks will be a bit harder because you will have to find the sum of either the lowercase or the uppercase letters.
// On the first line, you will receive the string.
// On the second line, you will receive one of two possible inputs:
// •	If you receive "UPPERCASE"  find the sum of all uppercase English letters in the previously received string
// •	If you receive "LOWERCASE"  find the sum of all lowercase English letters in the previously received string
// You should not sum the ASCII codes of any characters, which are not letters.
// At the end print the sum in the following format:
// •	The total sum is: {sum}




function valueString(arrOfStrs) {
    const [string, input] = arrOfStrs;
    let sumCounter = 0;

    for (const char of string) {
        if (input === `UPPERCASE` && char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
            sumCounter += char.charCodeAt(0);     
        } else if (input === `LOWERCASE` && char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
            sumCounter += char.charCodeAt(0);      
        }
    }
    console.log(`The total sum is: ${sumCounter}`);
}
valueString([
'HelloFromMyAwesomePROGRAM',
'LOWERCASE'
]);
