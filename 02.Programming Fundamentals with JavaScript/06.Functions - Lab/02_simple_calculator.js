// Write a function that receives three parameters – two numbers and an operator (string) – and calculates the result depending on the operator.
//  Operator can be 'multiply', 'divide', 'add' or 'subtract'. Try to solve this task using arrow functions.


function calculator(firstNum, secondNum, operator) {
    let operation;
    switch (operator) {
        case `multiply`:
            operation = (x, y) => x * y;
            break;
        case `divide`:
            operation = (x, y) => x / y;
            break;
        case `add`:
            operation = (x, y) => x + y;
            break;
        case `subtract`:
            operation = (x, y) => x - y;
            break;
    }
    return operation(firstNum, secondNum);
}
console.log(calculator(5, 5, `multiply`));
