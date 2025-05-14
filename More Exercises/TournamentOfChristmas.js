function solve(arr) {
  let days = Number(arr[0]);
  let index = 1;
  let allEarnedMoney = 0;
  let winingDays = 0;
  let losingDays = 0;
  for (let currentDay = 1; currentDay <= days; currentDay++) {
    let earnedMoneyPerDay = 0;
    let winsForDay = 0;
    let lossesForDay = 0;
    while (arr[index] !== `Finish`) {
      let result = arr[index + 1];
      if (result === `win`) {
        winsForDay++;
        earnedMoneyPerDay += 20;
      } else 
        lossesForDay++;
      index += 2; 
    }
    index++;
    if (winsForDay > lossesForDay) { 
      earnedMoneyPerDay *= 1.1;
      winingDays++;
    } else 
      losingDays++;
    
    allEarnedMoney += earnedMoneyPerDay;
  }
  if (winingDays > losingDays) {
  allEarnedMoney *= 1.2;
  console.log(`You won the tournament! Total raised money: ${allEarnedMoney.toFixed(2)}`);
  } else 
    console.log(`You lost the tournament! Total raised money: ${allEarnedMoney.toFixed(2)}`);
}