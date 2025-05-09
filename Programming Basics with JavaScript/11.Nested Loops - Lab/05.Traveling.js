function solve(arr) {
  let index = 0;
  while (arr[index] !== `End`) {
    let destination = arr[index];
    let neededSum = Number(arr[index + 1]);
    let savedMoney = 0;
    index += 2;
    while (savedMoney < neededSum) {
      let currentMoney = Number(arr[index]);
      savedMoney += currentMoney;
      index++;
    }
    console.log(`Going to ${destination}!`);
  }
}