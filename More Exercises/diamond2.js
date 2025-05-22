function solve(n) {
  let firstStar = Math.ceil(n % 2);
  let secondStar = 0;
  let allRows = n;
  let isEvenN = false;
  if (n % 2 === 0) {
    allRows = n - 1;
    secondStar = star + 1;
    isEvenN = true;
  }
  for (let row = 1; row <= allRows; row++) {
    let toPrint = ``;
    for (let column = 1; column <= n; column++) {
      if (row === 1 && column === firstStar) {
        if (!isEvenN) {
          toPrint += `*`;
          secondStar = firstStar + 1;
        } else {
          toPrint += `**`;
          column++;
          secondStar++;
        }
        firstStar--;
      }
      
    }
  }
}