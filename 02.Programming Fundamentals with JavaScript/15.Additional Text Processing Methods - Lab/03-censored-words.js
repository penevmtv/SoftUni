//Write a function that receives a text as a first parameter and a single word as a second.
//Find all occurrences of that word in the text and replace them with the corresponding count of '*'.




function censoredWords(string, word) {
  let censuredStars = '*'.repeat(word.length);
  
  if (string.includes(word)) {
    let newString = string.replaceAll(word, censuredStars); 
    return newString; 
  }
}
console.log(censoredWords('A small sentence with some words', 'small'));