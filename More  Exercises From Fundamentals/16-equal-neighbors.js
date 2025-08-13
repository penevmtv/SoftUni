//Write a function that finds the number of equal neighbor pairs
//inside a matrix of variable size and type (numbers or strings).
//The input comes as an array of arrays, containing string
//elements (2D matrix of strings).
//The output is the return value of your function. 
//Save the number of equal pairs, you find and return it.




function equalNeighbors(arrOfArrOfStrs) {
  let equalsCounter = 0;
  
  for (let i = 0; i < arrOfArrOfStrs.length; i++) {
    let elementArray = arrOfArrOfStrs[i];
    
    for (let j = 0; j < elementArray.length; j++) {
      
      if (j + 1 < elementArray.length && elementArray[j] === elementArray[j + 1]) {
        equalsCounter++;
      }
      if (i + 1 < arrOfArrOfStrs.length && elementArray[j] === arrOfArrOfStrs[i + 1][j]) {
        equalsCounter++;   
      }
    }
  }
  return equalsCounter;
}
console.log(equalNeighbors([
 ['2', '3', '4', '7', '0'],
 ['4', '0', '5', '3', '4'],
 ['2', '3', '5', '4', '2'],
 ['9', '8', '7', '5', '4']
]));
