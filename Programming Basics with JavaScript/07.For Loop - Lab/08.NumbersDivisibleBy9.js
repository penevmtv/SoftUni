function solve(n1, n2) {
    let sum = 0;
    let nums = " "
    for (let i = n1; i <= n2; i++) {
      if (i % 9 === 0) {
        sum += i;
        nums += i + "\n";
      }
    }
    console.log(`The sum: ${sum}`);
    console.log(nums);
}