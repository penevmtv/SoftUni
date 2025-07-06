// Write a function that counts the times each word occurs in a text. 
// Print the words sorted by count in descending order. The input comes as an array of strings.



function wordOccurrences(arrayOfStrings) {
     let wordsMap = new Map();

     for (let word of arrayOfStrings) {
          if (wordsMap.has(word)) {
               let currentValue = wordsMap.get(word);
               wordsMap.set(word, currentValue + 1);
          } else {
               wordsMap.set(word, 1);
          }
    }
    let sortedArr = [...wordsMap.keys()].sort((a, b) => wordsMap.get(b) - wordsMap.get(a));

    for (let key of sortedArr) {
          console.log(`${key} -> ${wordsMap.get(key)} times`);
    }
}
wordOccurrences(["Here", "is", "the", "first",
     "sentence", "Here", "is", "another",
     "sentence", "And", "finally", "the",
     "third", "sentence"]);
