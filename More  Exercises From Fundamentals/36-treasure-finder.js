// Write a function that decrypts a message by a given key and gathers information about the hidden treasure type and its coordinates. 
// On the first line, you will receive a key (sequence of numbers). 
// On the next few lines until you receive "find" you will get lines of strings. 
// You have to loop through every string and decrease the ASCII code of each character with a corresponding number of the key sequence. 
// The way you choose a key number from the sequence is by just looping through it. 
// If the length of the key sequence is less than the string sequence, you start looping from the beginning of the key. 
// For more clarification see the example below. After decrypting the message, you will get a type of treasure and its coordinates. 
// The type will be between the symbol '&' and the coordinates will be between the symbols '<' and '>'. 
// For each line, print the type and the coordinates in the format:
//                `Found {type} at {coordinates}`




function treasureFinder(inputArr) {
    const [keyStr, ...messagesArr] = inputArr;
    const keyArr = keyStr.split(` `);
    
    let index = 0;
    while (messagesArr[index] !== `find`) {
        const message = messagesArr[index];
        
        let decryptingMessage = ``;
        for (let i = 0; i < message.length; i++) {
            const currentCharCode = message.charCodeAt(i);

            const newCharCode = currentCharCode - (keyArr[i % keyArr.length]);
            const char = String.fromCharCode(newCharCode);
            decryptingMessage += char;
        }

        const startTypeIndex = decryptingMessage.indexOf(`&`);
        const endTypeIndex = decryptingMessage.indexOf(`&`, startTypeIndex + 1);

        const startCoordinatesIndex = decryptingMessage.indexOf(`<`);
        const endCoordinatesIndex = decryptingMessage.indexOf(`>`, startCoordinatesIndex + 1);

        const type = decryptingMessage.slice(startTypeIndex + 1, endTypeIndex);
        const coordinates = decryptingMessage.slice(startCoordinatesIndex + 1, endCoordinatesIndex);
        
        console.log(`Found ${type} at ${coordinates}`);

        index++;
    }
    
}
treasureFinder([
"1 4 2 5 3 2 1",
`Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
"tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
"'stj)>34W68Z@",
"find"
]);
