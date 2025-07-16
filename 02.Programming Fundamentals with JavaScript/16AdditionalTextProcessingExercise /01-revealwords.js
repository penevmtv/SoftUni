//Write a function, which receives two parameters. 

//The first parameter will be a string with some words separated by ', '.

//The second parameter will be a string that contains templates containing '*'.
//Find the word with the same length as the template and replace it.





function revealWords(strOfWords, strOfTemplates) {
  let arrOfWords = strOfWords.split(`, `);
  let arrOfTemplates = strOfTemplates.split(` `);
  
  for (let word of arrOfWords) {
    let wordLength = `*`.repeat(word.length);
    
    if (arrOfTemplates.includes(wordLength)) {
      
      let indexOfWord = arrOfTemplates.indexOf(wordLength);
      
      arrOfTemplates.splice(indexOfWord, 1, word);
    }
  }
  return arrOfTemplates.join(` `);
}
console.log(revealWords('great, learning',
'softuni is ***** place for ******** new programming languages'
));
