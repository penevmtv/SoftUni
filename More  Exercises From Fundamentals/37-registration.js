// John wants to register on a sales site, but too many people call him John. It asks you to write a program that will generate an original username.
// On the first line, you will receive the username that he wants to use in the first place. 
// On the following lines, you will be receiving commands until the "Registration" command. There are five possible commands:
// •	"Letters {Lower/Upper}"
// o	Replace all letters with lower case or with upper case, then print the result.
// •	"Reverse {startIndex} {endIndex}"
// o	Reverse the substring from the start index until the end index (both inclusive), then print it. Do NOT change it in the username.
// Note: Check if the indices are valid. If they aren't - skip the command. An index is valid when it is non-negative and less than the size of the collection.
// •	"Substring {substring}"
// o	If the username contains the given substring, cut it out and print the result without the cut substring.
// o	Otherwise, print:
// "The username {string} doesn't contain {substring}."
// •	"Replace {char}"
// o	Replace all occurences of the given char with a dash (-) and print the result.
// •	"IsValid {char}"
// o	For a username to be valid, it must contain the given char. If it is, print "Valid username.". 
// o	Otherwise, print: "{char} must be contained in your username."
// Input
// •	On the first line, you are going to receive the string.
// •	On the following lines, until the "Registration" command is received, you will be receiving commands.
// •	All commands are case-sensitive.
// Output
// •	Print the output of every command in the format described above.




function registration(inputArr) {
    let [string, ...commandsArr] = inputArr;

    let index = 0;
    while (commandsArr[index] !== `Registration`) {
        const [command, ...info] = commandsArr[index].split(` `);
        
        switch (command) {
            case `Letters`:
                const type = info[0];

                switch (type) {
                    case `Lower`:
                        string = string.toLowerCase();
                        break;
                    case `Upper`:
                        string = string.toUpperCase();
                        break;
                }
                
                console.log(string);
                break;

            case `Reverse`:
                const [startIndex, endIndex] = info.map(Number);

                if (startIndex >= 0 && startIndex < string.length && endIndex >= 0 && endIndex < string.length) {

                    const result = string.slice(startIndex, endIndex + 1).split(``).reverse().join(``);

                    console.log(result);
                }
                break;

            case `Substring`:
                const substring = info[0];

                if (string.includes(substring)) {
                    string = string.replaceAll(substring, ``);

                    console.log(string);
                } else {
                    console.log(`The username ${string} doesn't contain ${substring}.`);
                }
                break;

            case `Replace`:
                const char = info[0];

                string = string.replaceAll(char, `-`);

                console.log(string);
                break;

            case `IsValid`:
                const character = info[0];

                if (string.includes(character)) {
                    console.log(`Valid username.`);
                } else {
                    console.log(`${character} must be contained in your username.`);
                }
                break;
        }

        index++;
    }
}
registration([
`ThisIsSoftUni`,
`Reverse 1 3`,
`Replace S`,
`Substring hi`,
`Registration`
]);
