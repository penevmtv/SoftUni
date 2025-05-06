function solve(arr) {
    let num = Number(arr[0]);
    let sum = 0;
    let index = 1;
    while (sum < num) {
        let currentNumber = Number(arr[index]);
        sum += currentNumber;
        index++;
    }
    console.log(sum);
}