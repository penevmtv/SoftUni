/*Write a program that recreates the Memory game.
On the first line, you will receive a sequence of elements. Each element in the sequence will have a twin. 
Until the player receives "end" from the console, you will receive strings with two integers separated by a space, representing the indexes of elements in the sequence.
If the player tries to cheat and enters two equal indexes or indexes which are out of bounds of the sequence,
you should add two matching elements at the middle of the sequence in the following format:
"-{number of moves until now}a" 
Then print this message on the console:
"Invalid input! Adding additional elements to the board"
Input
•	On the first line, you will receive a sequence of elements.
•	On the following lines, you will receive integers until the command "end".
Output
•	Every time the player hit two matching elements, you should remove them from the sequence and print on the console the following message:
"Congrats! You have found matching elements - {element}!"
•	If the player hit two different elements, you should print on the console the following message:
"Try again!"
•	If the player hit all matching elements before he receives "end" from the console, you should print on the console the following message: 
"You have won in {number of moves until now} turns!"
•	If the player receives "end" before he hits all matching elements, you should print on the console the following message:
"Sorry you lose :(
{the current sequence's state}"
Constraints
•	All elements in the sequence will always have a matching element.*/




function memoryGame(inputArr) {
  let [sequenceStr, ...commandsArr] =  inputArr;
  let sequenceArr = sequenceStr.split(` `);
  let commandsCounter = 0;
  
  let index = 0;
  while (commandsArr[index] !== `end`) {
    commandsCounter++;
    
    const indexesArr = commandsArr[index].split(` `).map(Number);
    
    const[idx1, idx2] = indexesArr;
    
    if (idx1 !== idx2 && indexesArr.every(x => x >= 0 && x < sequenceArr.length)) {
      
      if (sequenceArr[idx1] === sequenceArr[idx2]) {
        console.log(`Congrats! You have found matching elements - ${sequenceArr[idx1]}!`);
        
        sequenceArr.splice(Math.max(idx1, idx2), 1);
        sequenceArr.splice(Math.min(idx1, idx2), 1);
      } else {
        console.log(`Try again! `);
      }
      
    } else {
      const addetEl = `-${commandsCounter}a`;
      
      const middleIdx = Math.floor(sequenceArr.length / 2);
      sequenceArr.splice(middleIdx, 0, addetEl, addetEl);
      console.log(`Invalid input! Adding additional elements to the board`);  
    }
   
    if (!sequenceArr.length) {
      console.log(`You have won in ${commandsCounter} turns!`);
      break;
    }
    index++;
  }
  
  if (sequenceArr.length) {
    console.log(`Sorry you lose :(
${sequenceArr.join(` `)}`)
  }
}
memoryGame([
"1 1 2 2 3 3 4 4 5 5", 
"1 0",
"-1 0",
"1 0", 
"1 0", 
"1 0", 
"end"
]);
