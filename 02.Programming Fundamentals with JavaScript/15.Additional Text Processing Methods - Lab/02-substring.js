//Write a function that receives a string and two numbers. The numbers will be a starting
//index and count of elements to substring. Print the result.


function substring(string, startIndex, count) {
  let newString = string.substring(startIndex, startIndex + count);
  console.log(newString);
}
substring('ASentence', 1, 8);
