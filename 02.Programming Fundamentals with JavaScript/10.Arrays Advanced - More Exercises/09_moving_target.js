// You are at the shooting gallery again, and you need a program that helps you keep track of moving targets. On the first line, 
// you will receive a sequence of targets with their integer values, split by a single space. Then, you will start receiving commands 
// for manipulating the targets until the "End" command. The commands are the following:

// · "Shoot {index} {power}"

// o Shoot the target at the index if it exists by reducing its value by the given power (integer value).
// o Remove the target if it is shot. A target is considered shot when its value reaches 0.

// · "Add {index} {value}"

// o Insert a target with the received value at the received index if it exists.
// o If not, print: "Invalid placement!"

// · "Strike {index} {radius}"

// o Remove the target at the given index and the ones before and after it depending on the radius.
// o If any of the indices in the range is invalid, print: "Strike missed!" and skip this command.

// Example: "Strike 3 2"

// {...} {radius} {radius} {strikeIndex} {radius} {radius} {...} {...}

// · "End"

// o Print the sequence with targets in the following format and end the program:

// "{target1}|{target2}…|{targetn}"

// Input / Constraints

// · On the first line, you will receive the sequence of targets – integer values [1-10000].
// · On the following lines, until the "End" will be receiving the command described above – strings.
// · There will never be a case when the "Strike" command would empty the whole sequence.

// Output

// · Print the appropriate message in case of any command if necessary.
// · In the end, print the sequence of targets in the format described above. 




function movingTarget(arrOfStrings) {
    let copyArrOfStr = arrOfStrings.slice();
    let arrOfTargets = copyArrOfStr.shift().split(` `);
    const isValidIndexNum = (arr, index) => index >= 0 && index < arr.length;

    let index = 0;
    while (index < copyArrOfStr.length && copyArrOfStr[index] !== `End`) {
        let commandArr = copyArrOfStr[index].split(` `);

        let command = commandArr.shift();
        let [indexNum, numOfAct] = commandArr.map(Number);

        switch (command) {
            case `Shoot`:
                if (isValidIndexNum(arrOfTargets, indexNum) && numOfAct >= 0) {
                    let reducingElement = arrOfTargets[indexNum] - numOfAct;
                    if (reducingElement <=0) {
                        arrOfTargets.splice(indexNum, 1);
                    } else {
                        arrOfTargets[indexNum] = reducingElement;
                    }
                }
                break;
            case `Add`:
                if (isValidIndexNum(arrOfTargets, indexNum) && numOfAct >= 0) {
                    arrOfTargets.splice(indexNum, 0, numOfAct);
                } else {
                    console.log(`Invalid placement!`);
                }
                break;
            case `Strike`:
                let startRange = indexNum - numOfAct;
                let endRange = indexNum + numOfAct;
                if (startRange < 0 || endRange >= arrOfTargets.length || numOfAct < 0) {
                    console.log(`Strike missed!`);
                } else {
                    let deleteCount = endRange - startRange + 1;
                    arrOfTargets.splice(startRange, deleteCount);
                }
                break;
        }
        index++;
    }
    return arrOfTargets.join(`|`);
}
console.log(movingTarget(["52 74 23 44 96 110", "Shoot 5 10", "Shoot 1 80", "Strike 2 1", "Add 22 3", "End"]));
