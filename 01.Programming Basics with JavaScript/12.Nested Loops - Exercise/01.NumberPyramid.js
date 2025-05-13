function solve(number) {
    let currentNum = 1;
  for (let rows = 1; ; rows++) {
    let printRow = ` `;
    let isDone = false;
    for (let place = 1; place <= rows ;place++) {
      printRow += `${currentNum} `;
      currentNum++;
      if (currentNum > number) {
        isDone = true;
        break;
      }
    }
    console.log(printRow);
    if (isDone)
        break;
  }
}