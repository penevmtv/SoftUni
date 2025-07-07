// Write a function that receives an array of words and finds occurrences of given words in that sentence. 
// The input will come as an array of strings. The first string will contain the words you will be looking 
// for separated by a space. All strings after that will be the words in which you will check for a match.
// Print for each word how many times it occurs. The words should be sorted by count in descending.




function wordsTracker(arrOfStrings) {
    let wordsMap = new Map();
    let arrOfSearchingWords = arrOfStrings.shift().split(` `);
    for (let word of arrOfSearchingWords) {
        wordsMap.set(word, 0);
    }
    
    for (let word of arrOfStrings) {
        if (wordsMap.has(word)) {
            let countOccurs = wordsMap.get(word);
            wordsMap.set(word, countOccurs + 1);
        }
    }

    let sortedArray = [...wordsMap.entries()].sort((a, b) => b[1] - a[1]);

    for (let [word, countOccurs] of sortedArray) {
        console.log(`${word} - ${countOccurs}`);
    }
}
wordsTracker([
'is the', 
'first', 'sentence', 'Here', 'is', 'another',
 'the', 'And', 'finally', 'the', 'the', 'sentence']);