// You have been tasked to serialize a string. The serialization is done specially, in which a character from that string is saved with the indexes at which it is found.
// The input will consist array, containing a single string, which may consist of ANY ASCII characters. Your task is to serialize the string in the following way:
// {char}:{index1}/{index2}/{index3}
// The char will be the character, and the indexes will be the indexes it is found at in the string.




function serializeString(stringArr) {
    const string = stringArr[0];
    let charObj = {};

    for (const char of string) {
        if (!charObj[char]) {
            charObj[char] = [];
        }

        
    }
}
serializeString(["avjavamsdmcalsdm"]);
