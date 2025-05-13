function solve(arr) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    let index = 0;
    while (arr[index] !== `Stop`) {
        let currentNum = Number(arr[index]);
        if (currentNum > maxNum)
            maxNum = currentNum;
        index++
    }
    console.log(maxNum);
}