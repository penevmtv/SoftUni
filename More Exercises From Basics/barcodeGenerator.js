function solve(firstNum, secondNum) {
    let textFirstNum = firstNum.toString();
    let textSecondNum = secondNum.toString();
    let toPrint = ` `;
    for (let digit1 = Number(textFirstNum[0]); digit1 <= Number(textSecondNum[0]); digit1++) {
        if (digit1 % 2 !== 0) {
            for (let digit2 = Number(textFirstNum[1]); digit2 <= Number(textSecondNum[1]); digit2++) {
               if (digit2 % 2 !== 0) {
                   for (let digit3 = Number(textFirstNum[2]); digit3 <= Number(textSecondNum[2]); digit3++) {
                      if (digit3 % 2 !== 0) {
                          for (let digit4 = Number(textFirstNum[3]); digit4 <= Number(textSecondNum[3]); digit4++) {
                              if (digit4 % 2 !== 0) {
                                 let oddNum = `` + digit1 + digit2 + digit3 + digit4;
                                 toPrint += `${oddNum} `;
                                }
                            }  
                        }
                    }  
                }
            }   
        }
    }
    console.log(toPrint);
}