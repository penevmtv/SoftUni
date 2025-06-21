//Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power. 

//Your task is to detonate every occurrence of the special bomb number and according to its power his neighbors from left and right. 
//Detonations are performed from left to right and all detonated numbers disappear. 

//The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and its power.
//The output is the sum of the remaining elements in the sequence.



function bombNumbers(fieldArr, bombArr) {
  let bomb = bombArr.shift();
  let bombPower = bombArr.shift();
  
  while (fieldArr.includes(bomb)) {
    let bombIndex = fieldArr.indexOf(bomb);
    
    let startIndex = Math.max(0, bombIndex - bombPower);
    let endIndex = Math.min(fieldArr.length - 1, bombIndex + bombPower);
    
    let nElements = (endIndex - startIndex) + 1;
    
    fieldArr.splice(startIndex, nElements);
  }
  let sumOfFieldArr = 0;
  
  for (num of fieldArr) {
    sumOfFieldArr += num;
  }
  return sumOfFieldArr;
}
console.log(bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
[2, 1
]));