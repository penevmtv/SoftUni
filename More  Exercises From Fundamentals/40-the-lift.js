//Write a program that finds a place for the tourist on a lift. 
//Every wagon should have a maximum of 4 people on it. If a wagon is full, you should direct the people to the next one with space available.
//Input
//•	On the first line, you will receive how many people are waiting to get on the lift
//•	On the second line, you will receive the current state of the lift separated by a single space: " ".
//Output
//When there is no more available space left on the lift, or there are no more people in the queue, 
 //you should print on the console the final state of the lift's wagons separated by " " and one of the following messages:
//•	If there are no more people and the lift has empty spots, you should print:
//"The lift has empty spots!
//{wagons separated by ' '}"
//•	If there are still people in the queue and no more available space, you should print:
//"There isn't enough space! {people} people in a queue!
//{wagons separated by ' '}"
//•	If the lift is full and there are no more people in the queue, you should print only the wagons separated by " ".




function theLift(inputArr) {
  function isLiftFull(liftArr) {
    for (const wagon of liftArr) {
      if (wagon < 4) {
        return false;
      }
    }
    return true;
  }
  
  let queue = Number(inputArr[0]);
  let lift = inputArr[1].split(` `).map(Number);
  
  for (let i = 0; i < lift.length; i++) {
    const wagon = lift[i];
    const goingIn = 4 - wagon; 
    
    if (wagon < 4) {
      
      lift[i] = goingIn <= queue ? 4 : wagon + queue;
      
      queue = Math.max(queue - goingIn, 0);
    }
  }
  
  if (isLiftFull(lift) && queue > 0) {
    console.log(`There isn't enough space! ${queue} people in a queue!`); 
    
  } else if (queue === 0 && !isLiftFull(lift)) {
    console.log(`The lift has empty spots!`);
  }
  
  console.log(lift.join(` `));
}
theLift([
 "15",
 "0 0 0 0 0"
]);
