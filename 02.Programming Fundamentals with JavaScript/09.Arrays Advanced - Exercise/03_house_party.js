//Write a function that keeps track of guests that are going to a house party.

//You will be given an array of strings. Each string will be one of the following:

//-	"{name} is going!"
//-	"{name} is not going!"
//If you receive the first type of input, you have to add the person if he/she is not in the list
// (If he/she is in the list print: "{name} is already in the list!").
// If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!"). 
// At the end print all the guests each on a separate line.



function houseParty(arrInput) {
  let listOfTheGuests = [];
  
  for (let command of arrInput) {
    let name = command.split(` `)[0];
    if (command.includes(`not`)) {
      if (listOfTheGuests.includes(name)) {
        listOfTheGuests.splice(listOfTheGuests.indexOf(name), 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    } else {
      if (listOfTheGuests.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        listOfTheGuests.push(name);
      }
    }
  }
  return listOfTheGuests.join(`\n`);
}
console.log(houseParty(['Allie is going!',
  'George is going!',
  'John is not going!',
  'George is not going!'
]));