// Write a JS program that prints a DNA helix with a length, specified by the user. The helix has a repeating structure,
//  but the symbol in the chain follows the sequence ATCGTTAGGG.
// The input comes as a single number. It represents the length of the required helix.
// The output is the completed structure, printed on the console.




function printDNA(numLength) {
  const char = [`A`, `T`, `C`, `G`, `T`, `T`, `A`, `G`, `G`, `G`];
  let firstCharIndex = 2;
  let secondCharIndex = 3;
  const star = `*`;
  const dash = `-`;
  let indexOfCharArr = 0;
  let isSpread = true;
  
  for (let i = 0; i < numLength; i++) {
    let lineToPrint = [];
    
    for (let j = 0; j < 6; j++) {
      if (j < firstCharIndex || j > secondCharIndex) {
        lineToPrint.push(star);
      } else if (j === firstCharIndex) {
        lineToPrint.push(char[indexOfCharArr]);
        indexOfCharArr++;
        if (isSpread)
      }
    }
  }
}
printDNA(10);
