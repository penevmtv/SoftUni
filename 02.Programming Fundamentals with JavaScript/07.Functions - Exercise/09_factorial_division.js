// Write a function that receives two integer numbers. Calculate the factorial of each number. 
// Divide the first result by the second and print the division formatted to the second decimal point.


function factorialDivision(number1, number2) {
    function factorial(num) {
        if (num < 0) {return undefined;}

        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    let factNum1 = factorial(number1);
    let factNum2 = factorial(number2);

    return (factNum1 / factNum2).toFixed(2);
}
console.log(factorialDivision(5, 2));



