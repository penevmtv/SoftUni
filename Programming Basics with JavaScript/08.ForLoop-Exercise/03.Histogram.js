function solve(arr) {
    let n = arr[0];
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (let i = 1; i < n + 1; i++) {
        let num = arr[i];
        if (num < 200)
            p1++;
        else if (num <= 399)
            p2++;
        else if (num <= 599)
            p3++;
        else if (num <= 799)
            p4++;
        else
            p5++;
    }
    console.log(`${((p1 / n) * 100).toFixed(2)}%`);
    console.log(`${((p2 / n) * 100).toFixed(2)}%`);
    console.log(`${((p3 / n) * 100).toFixed(2)}%`);
    console.log(`${((p4 / n) * 100).toFixed(2)}%`);
    console.log(`${((p5 / n) * 100).toFixed(2)}%`);    
}