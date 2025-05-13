function solve(arr) {
    let index = 0;
    let sumPrimeNums = 0;
    let sumNonPrimeNums = 0;
    let isPrime = true;
    while (arr[index] !== `stop`) {
        let currentNum = Number(arr[index]);
        if (currentNum < 0) {
            console.log(`Number is negative.`);
        } else {
            for (let i = 2; i < currentNum; i++) {
                if (currentNum % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) 
                sumPrimeNums += currentNum;
            else
                sumNonPrimeNums += currentNum;
            isPrime = true;
        }
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNums}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNums}`);
}