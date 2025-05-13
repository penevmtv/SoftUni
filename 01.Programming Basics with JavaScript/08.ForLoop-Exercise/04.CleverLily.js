function solve(age, washPrice, oneToyPrice) {
  let savedMoney = 0;
  let givenMoney = 0;
  let countToys = 0;
  
  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      savedMoney += (givenMoney + 9);
      givenMoney += 10;
    } else {
      countToys++;
    }
  }
  let toysMoney = oneToyPrice * countToys;
  savedMoney += toysMoney;
  let dif = Math.abs(savedMoney - washPrice);
  if (savedMoney >= washPrice)
    console.log(`Yes! ${dif.toFixed(2)}`);
  else
    console.log(`No! ${dif.toFixed(2)}`);
}
