function solve(n1, n2) {
    let toPrint = ` `;
    for (let i = n1; i <= n2; i++) {
        let string = i.toString();
        let evenNums = 0;
        let oddNums = 0;
        for (let index = 0; index < string.length; index++) {
            let currentNum = Number(string[index]);
            if (index % 2 === 0)
                evenNums += currentNum;
             else 
                oddNums += currentNum;
        }
        if (evenNums === oddNums)
            toPrint += `${string} `;
    }
    console.log(toPrint);   
}