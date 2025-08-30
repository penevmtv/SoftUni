// Write a function that prints a sum of all characters between two given characters (their ASCII code). 
// On the first line, you will get a character. On the second line, you get another character. 
// On the last line, you get a random string. Find all the characters between the two given and print their ASCII sum.



function asciiSumator(arrOfStrs) {
    const [firstChar, secondChar, string] = arrOfStrs;

    const firstCharCode = firstChar.charCodeAt(0);
    const secondCharCode = secondChar.charCodeAt(0);

    const minCode = Math.min(firstCharCode, secondCharCode);
    const maxCode = (firstCharCode + secondCharCode) - minCode;

    let sum = 0;
    for (const char of string) {
        const currentCharCode = char.charCodeAt(0);

        if (currentCharCode > minCode && currentCharCode < maxCode) {
            sum += currentCharCode;
        }
    }
    console.log(sum);
}
asciiSumator([
'a',
'1',
'jfe392$#@j24ui9ne#@$'
]);
