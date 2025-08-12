// Write a JS program that prints a DNA helix with a length, specified by the user. The helix has a repeating structure,
//  but the symbol in the chain follows the sequence ATCGTTAGGG.
// The input comes as a single number. It represents the length of the required helix.
// The output is the completed structure, printed on the console.




function printDNA(numLength) {

  function charIndex(boolean, index1, index2) {
    if (boolean && index1 - 1 >= 0) {
      index1--;
      index2++;
    } else if (boolean && index1 - 1 < 0) {
      boolean = false;
      index1++;
      index2--;
    } else if (!boolean && index1 + 1 <= 2) {
      index1++;
      index2--;
    } else if (!boolean && index1 + 1 > 2) {
      boolean = true;
      index1--;
      index2++;
    }
    return [boolean, index1, index2];
  }

  const chars = [`A`, `T`, `C`, `G`, `T`, `T`, `A`, `G`, `G`, `G`];
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
        lineToPrint.push(chars[indexOfCharArr]);
        indexOfCharArr + 1 === chars.length ? indexOfCharArr = 0 : indexOfCharArr++;
      } else if (j === secondCharIndex) {
        lineToPrint.push(chars[indexOfCharArr]);
        indexOfCharArr + 1 === chars.length ? indexOfCharArr = 0 : indexOfCharArr++;
      } else if (j > firstCharIndex && j < secondCharIndex) {
        lineToPrint.push(dash);
      }
    }
    let result = charIndex(isSpread, firstCharIndex, secondCharIndex);
    [isSpread, firstCharIndex, secondCharIndex] = result;

    console.log(lineToPrint.join(``));
  }
}
printDNA(10);
