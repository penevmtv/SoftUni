function solve(arr) {
  let days = Number(arr[0]);
  let index = 1;
  let allEarnedMoney = 0;
  let winingDays = 0;
  let losesDays = 0;
  for (let currentDay = 1; currentDay <= days; currentDay++) {
    let earnedMoneyPerDay = 0;
    let winsForDay = 0;
    let losesForDay = 0;
    while (arr[index] !== `Finish`) {
      let result = arr[index + 1];
      if (result === `win`) {
        winsForDay++;
        earnedMoneyPerDay += 20;
      } else 
        losesForDay++;
      index += 2; 
    }
    index++;
    if (winsForDay > losesForDay) { 
      earnedMoneyPerDay *= 1.1;
      winingDays++;
    } else 
      losesDays++;
    
    allEarnedMoney += earnedMoneyPerDay;
  }
  if (winingDays > losesDays) {
  allEarnedMoney *= 1.2;
  console.log(`You won the tournament! Total raised money: ${allEarnedMoney.toFixed(2)}`);
  } else 
    console.log(`You lost the tournament! Total raised money: ${allEarnedMoney.toFixed(2)}`);
}