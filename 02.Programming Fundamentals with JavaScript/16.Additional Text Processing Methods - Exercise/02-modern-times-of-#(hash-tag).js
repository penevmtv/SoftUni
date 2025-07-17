// The input will be a single string.
// Find all special words starting with #. If the found special word does not consist only of letters,
//  then it is invalid and should not be printed. 
// Finally, print out all the special words you found without the label (#) on a new line.




function modernTimes(string) {
    let arrOfString = string.split(` `);
    
    let hashtagWords = arrOfString.filter(word => word.startsWith(`#`) && word.length > 1);

    for (let word of hashtagWords) {
        word = word.slice(1);

        if (word.split(``).every(a => a >= `A` && a <= `Z` || a >= `a` && a <= `z`)) {
            
            console.log(word);
        }

        // let pattern = /\b[A-Za-z]+\b/;

        // if (pattern.test(word)) {
        //     console.log(word);
        // }
    }
}
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');