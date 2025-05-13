function solve(arr) {
    let sum = 0;
    let index = 0;
    while (arr[index] !== `NoMoreMoney`) {
        let payment = Number(arr[index]);
        if (payment >= 0) { 
            sum += payment;
            console.log(`Increase: ${payment.toFixed(2)}`);
        } else {
            console.log(`Invalid operation!`);
            break; 
        }
        index++;
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}