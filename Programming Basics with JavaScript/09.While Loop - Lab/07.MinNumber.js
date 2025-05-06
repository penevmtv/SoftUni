function solve(arr) {
    let minNum = Number.MAX_SAFE_INTEGER;
    let index = 0;
    while (arr[index] !== `Stop`) {
        let currentNum = Number(arr[index]);
        if (currentNum < minNum)
            minNum = currentNum;
        index++
    }
    console.log(minNum);
}