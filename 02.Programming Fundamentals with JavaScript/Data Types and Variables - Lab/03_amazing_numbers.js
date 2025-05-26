// Write a function, which as input will receive a number.
// Check and print if it is amazing or not into the following format: 
	// "{number} Amazing? {True or False}"
// An amazing number includes the digit 9 the sum of its digits. 
// Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)


function solve(num) {
   let stringNum = String(num);
   let sum = 0;
   for (let i = 0; i < stringNum.length; i++) {
    let currentDigit = stringNum[i];
    sum += parseInt(currentDigit);
   }
//    let isAmazing = sum.toString().includes(`9`);
   let isAmazing = /9/.test(sum);

   if (isAmazing) 
    console.log(`${num} Amazing? True`);
   else
    console.log(`${num} Amazing? False`);
}
