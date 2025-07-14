//Write a function that receives a text and a single word that you need to search.
//Print the number of all occurrences of this word in the text.



function countStringOccurrences(text, word) {
  let arrOfStr = text.split(` `);
  
  let wordCounter = 0;
  for (let strElement of arrOfStr) {
    if (strElement === word) {
      wordCounter++
    }
  }
  return wordCounter;
}
console.log(countStringOccurrences('This is a word and it also is a sentence',
'is'));