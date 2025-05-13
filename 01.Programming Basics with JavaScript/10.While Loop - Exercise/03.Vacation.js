function solve(arr) {
  let tripCost = Number(arr[0]);
  let savedMoney = Number(arr[1]);
  let days = 0;
  let spendDaysCount = 0;
  let is5SpendDays = false;
  let index = 2;
  while (savedMoney < tripCost) {
    let money = Number(arr[index + 1]);
    if (arr[index] === `spend`) {
      spendDaysCount++;
      savedMoney -= money;
      if (spendDaysCount === 5) {
        is5SpendDays = true;
        days++;
        break;
      } else if (savedMoney < 0) {
        savedMoney = 0;
      }
    } else {
      savedMoney += money;
      spendDaysCount = 0;
    }
    days++;
    index += 2;
  }
  if (is5SpendDays) {
    console.log(`You can't save the money.`);
    console.log(days);
  } else
    console.log(`You saved the money for ${days} days.`);
}