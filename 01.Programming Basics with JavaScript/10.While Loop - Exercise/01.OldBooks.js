function solve(arr) {
  let searchBook = arr[0];
  let checkedBooks = 0;
  let isFound = false;
  let index = 1;
  while (arr[index] !== `No More Books`) {
    let currentBook = arr[index];
    if (currentBook === searchBook) {
      console.log(`You checked ${checkedBooks} books and found it.`);
      isFound = true; 
      break;
    } else { 
      checkedBooks++;
      index++;
    }
  }
  if (!isFound) { 
  console.log(`The book you search is not here!`);
  console.log(`You checked ${checkedBooks} books.`);
  }
}
