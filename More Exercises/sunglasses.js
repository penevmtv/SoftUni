function solve(n) {
  for (let currentRow = 1; currentRow <= n; currentRow++) {
    for (let currentColumn = 1; currentColumn <= n * 5; currentColumn++) {
      if (currentColumn >  (n * 5 - n) / 2 &&  currentColumn <=  (n * 5 + n) / 2) {
        if (currentRow !== Math.floor(n / 2)) 
          continue;
        else 
          console.log(`|`);
      } else if ((currentRow === 1 || currentRow === n) || currentColumn === 1 || currentColumn === n * 5 || currentColumn === (n * 5 - n) / 2 || currentColumn === (n * 5 + n) / 2 + 1) {
        console.log(`*`);
      } else 
        console.log(`/`);
    }
  }
}