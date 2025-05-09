function solve(startN, lastN, magicN) {
  let combCounter = 0;
  let isFound = false;
  for (let n1 = startN; n1 <= lastN; n1++) {
    for (let n2 = startN; n2 <=  lastN; n2++) {
      combCounter++;
      if (n1 + n2 === magicN) {
        console.log(`Combination N:${combCounter} (${n1} + ${n2} = ${magicN})`);
        isFound = true;
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  if (!isFound) {
    console.log(`${combCounter} combinations - neither equals ${magicN}`);
  }
}