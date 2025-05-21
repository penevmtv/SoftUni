function solve(n) {
  let middleRow = Math.floor(n / 2);
  let leftRight, mid;
  for (let row = 0; row < n; row++) {
    if (row <= middleRow) {
      leftRight = (n - 1) / 2 - row;
    } else {
      leftRight = row - middleRow;
    }
    mid = n - 2 * leftRight - 2;
    let line = '';
    for (let i = 0; i < leftRight; i++) {
      line += '-';
    }
    line += '*';
    if (mid >= 0) {
      for (let i = 0; i < mid; i++) {
        line += '-';
      }
      line += '*';
    }
    for (let i = 0; i < leftRight; i++) {
      line += '-';
    }

    console.log(line);
  }
}

