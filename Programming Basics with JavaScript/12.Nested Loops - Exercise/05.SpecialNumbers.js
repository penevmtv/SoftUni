function solve(n) {
    let numsToPrint = ` `;
    for (let currentNum = 1111; currentNum <= 9999; currentNum++) {
        let textNum = currentNum.toString();
        let isSpecial = true;
        for (let index = 0; index < 4; index++) {
            let digit = Number(textNum[index]);
            if (n % digit !== 0) {
                isSpecial = false;
                break;
            }
        }
        if (isSpecial) 
            numsToPrint += `${textNum} `;
        else
            isSpecial = true;
    }
    console.log(numsToPrint);
}