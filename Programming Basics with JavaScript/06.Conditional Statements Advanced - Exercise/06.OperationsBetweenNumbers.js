function operators(num1, num2, oper) {
    let result = 0;
    let evenOrOdd = " ";
    let isZeroN2 = false;

    switch (oper) {
        case "+":
            result = num1 + num2;
            evenOrOdd = result % 2 === 0 ? "even" : "odd";
            break;
        case "-":
            result = num1 - num2;
            evenOrOdd = result % 2 === 0 ? "even" : "odd";
            break;
        case "*":
            result = num1 * num2;
            evenOrOdd = result % 2 === 0 ? "even" : "odd";
            break;
        case "/":
            if (num2 === 0)
                isZeroN2 = true;
            else
                result = num1 / num2;
            break;
        case "%":
            if (num2 === 0)
                isZeroN2 = true;
            else
                result = num1 % num2;
            break;
    }

    if (isZeroN2)
        console.log(`Cannot divide ${num1} by zero`);

    else if (oper != "/" && oper != "%")
        console.log(`${num1} ${oper} ${num2} = ${result} - ${evenOrOdd}`);
    else if (oper === "/")
        console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
    else
        console.log(`${num1} % ${num2} = ${result}`);
}