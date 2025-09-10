// Yet again, you have forgotten your password. Naturally, it's not the first time this has happened. 
// Actually, you got so tired of it that you decided to help yourself with an intelligent solution.
// Write a password reset program that performs a series of commands upon a predefined string. 
// First, you will receive a string, and afterward, until the command "Done" is given, you will be receiving strings with commands split by a single space. 
// The commands will be the following:
// •	"TakeOdd"
// o	 Takes only the characters at odd indices and concatenates them to obtain the new raw password and then prints it.
// •	"Cut {index} {length}"
// o	Gets the substring with the given length starting from the given index from the password and removes its first occurrence, then prints the password on the console.
// o	The given index and the length will always be valid.
// •	"Substitute {substring} {substitute}"
// o	If the raw password contains the given substring, replace all of its occurrences with the substitute text given and print the result.
// o	If it doesn't, prints "Nothing to replace!".
// Input
// •	You will be receiving strings until the "Done" command is given.
// Output
// •	After the "Done" command is received, print:
// o	"Your password is: {password}"
// Constraints
// •	The indexes from the "Cut {index} {length}" command will always be valid.




function passwordReset(inputArr) {
    let rawPass = inputArr[0];

    let index = 1;
    while (inputArr[index] !== `Done` && index < inputArr.length) {
        const [command, ...infoArr] = inputArr[index].split(` `);

        if (command === `TakeOdd`) {
            rawPass = rawPass.split(``).filter((char, idx) => idx % 2 === 1).join(``);

            console.log(rawPass);

        } else if (command === `Cut`) {
            const [idx, length] = infoArr.map(Number);
            const substring = rawPass.slice(idx, idx + length);
            rawPass = rawPass.replace(substring, ``);

            console.log(rawPass);

        } else if (command === `Substitute`) {
            const [substring, substitute] = infoArr;

            if (rawPass.includes(substring)) {
                rawPass = rawPass.replaceAll(substring, substitute);
                
                console.log(rawPass);

            } else {
                console.log(`Nothing to replace!`);
            }
        }
        index++;
    }
    console.log(`Your password is: ${rawPass}`);
}
passwordReset([
"Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"
]);
