// During World War 2, you are a mathematician who joined the cryptography team to decipher the enemy's enigma code.
// Your job is to create a program to crack the codes.
// On the first line of the input, you will receive the encrypted message. After that, until the "Decode" command is given, 
// you will be receiving strings with instructions for different operations that need to be performed upon the concealed message 
// to interpret it and reveal its true content. There are several types of instructions, split by '|'
// · "Move {number of letters}":
// o Moves the first n letters to the back of the string
// · "Insert {index} {value}":
// o Inserts the given value before the given index in the string
// · "ChangeAll {substring} {replacement}":
// o Changes all occurrences of the given substring with the replacement text
// Input / Constraints
// · On the first line, you will receive a string with a message.
// · On the following lines, you will be receiving commands, split by '|' .
// Output
// · After the "Decode" command is received, print this message: "The decrypted message is: {message}" 



function theImitationGame(arrOfStrs) {
    let workingArr = arrOfStrs.slice();

    let encryptedMessage = workingArr.shift();

    let index = 0;
    let input = workingArr[index];
    while (input !== `Decode`) {

        let inputArr = input.split(`|`);
        let command = inputArr.shift();

        let newString;
        switch (command) {

            case `Move`:

                let numberOfLetters = Number(inputArr.shift());

                newString = encryptedMessage.slice(numberOfLetters) + encryptedMessage.slice(0, numberOfLetters);
                encryptedMessage = newString;
                break;

            case `Insert`:

                let [index, value] = inputArr;
                index = Number(index);

                newString = encryptedMessage.slice(0, index) + value + encryptedMessage.slice(index);
                encryptedMessage = newString;
                break;
            case `ChangeAll`:

                let [substring, replacement] = inputArr;

                //newString = encryptedMessage.replaceAll(substring, replacement);
                //encryptedMessage = newString;

                if (substring !== replacement) {
                    do {
                        newString = encryptedMessage.replace(substring, replacement);
                        encryptedMessage = newString;
                    } while (encryptedMessage.includes(substring));
                }

                break;
        }
        index++;
        input = workingArr[index];
    }
    console.log(`The decrypted message is: ${encryptedMessage}`);
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
