function solve(number) {
    let n = Number(number);
    let num = 1;
    while (num <= n) {
        console.log(num);
        num = num * 2 + 1;
    }
}