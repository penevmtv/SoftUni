function solve(n) {
  let firstStar = Math.ceil(n / 2);
  let secondStar = firstStar;
  let allRows = n;
  let isEvenN = false;
  if (n % 2 === 0) {
    allRows = n - 1;
    secondStar = firstStar + 1;
    isEvenN = true;
  }
  for (let row = 1; row <= allRows; row++) {
    let toPrint = ``;
    for (let column = 1; column <= n; column++) {
      if (row === 1 && column === firstStar) {
        if (!isEvenN) {
          toPrint += `*`;
        } else {
          toPrint += `**`;
          column++;
        }
      } else if (column === firstStar || column === secondStar) {
        toPrint += `*`;
      } else 
        toPrint += `-`;
      
    }
    console.log(toPrint);
    
    if (row < Math.ceil(n / 2)) {
      firstStar--;
      secondStar++;
    } else {
      firstStar++;
      secondStar--;
    }
  }
}