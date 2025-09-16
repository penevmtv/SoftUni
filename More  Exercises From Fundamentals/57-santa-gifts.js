// You will be given an array of integers, which represent the house numbers you should visit. 
// The commands will lead you to them. If they lead you to non-existing places, don’t move.
// •	Forward {numberOfSteps}
// •	Back {numberOfSteps}
// o	When you receive the “Forward” or “Back” command, you move the given number of times in this direction and remove the house in this position from your list. 
// Also, when you receive the next command, you continue from this position. 
// •	Gift {index} {houseNumber}
// o	Enter a new house number, which the dwarves have left out on purpose, at the given position and move to its position. 
// •	Swap {indexOfFirst} {indexOfSecond}
// o	Santa wants to rearrange his path and swap the order of two houses. 
// You will receive the numbers of the houses, that need to be switched and he doesn’t need to move to fulfill this command.
// Input 
// •	On the first line you will receive the number of commands – integer in the range [1-50]
// •	On the second line you will receive the array of integers, that represent the houses, split by a single space – valid integers in the range [1 – 500]
// •	On the next n lines, you will receive the commands in the following format:
// o	Forward {steps}
// o	Back {steps}
// o	Gift {index} {value}
// o	Swap {value1} {value2}
// Output
// •	Print the last position and the remaining houses in the following format:
// “Position {position}”
// “{houseNumber}, {houseNumber}………, {houseNumber}”
// Constraints
// •	The house numbers will be valid integers in the range [1 - 1000]
// •	The number of commands will be a valid integer in the range [1 - 50]
// •	The commands will be given in the exact format as they are written above
// •	There will always be at least one valid command




function santaGifts(inputArr) {

    const isValidIdx = (idx, arr) => idx >= 0 && idx < arr.length;

    let houseNumbers = inputArr[1].split(` `).map(Number);
    let currentPosition = 0;

    for (let i = 2; i < inputArr.length; i++) {
        const commandArr = inputArr[i].split(` `);

        if (commandArr.includes(`Forward`)) {
            const numSteps = Number(commandArr[1]);

            if (isValidIdx(currentPosition + numSteps, houseNumbers)) {
                currentPosition += numSteps;
                houseNumbers.splice(currentPosition, 1);
            }

        } else if (commandArr.includes(`Back`)) {
            const numSteps = Number(commandArr[1]);

            if (isValidIdx(currentPosition - numSteps, houseNumbers)) {
                currentPosition -= numSteps;
                houseNumbers.splice(currentPosition, 1);
            }

        } else if (commandArr.includes(`Gift`)) {
            const [index, houseNumber] = commandArr.slice(-2).map(Number);

            if (isValidIdx(index, houseNumbers)) {
                currentPosition = index;
                houseNumbers.splice(index, 0, houseNumber);
            }

        } else if (commandArr.includes(`Swap`)) {
            const [house1, house2] = commandArr.slice(1).map(Number);

            const house1Idx = houseNumbers.indexOf(house1);
            const house2Idx = houseNumbers.indexOf(house2);

            if (house1Idx !== -1 && house2Idx !== -1) {

                houseNumbers[house1Idx] = house2;
                houseNumbers[house2Idx] = house1;
            }
        }
    }
    console.log(`Position: ${currentPosition}`);
    console.log(houseNumbers.join(`, `));
}
santaGifts([
    5,
    `255 500 54 78 98 24 30 47 69 58`,
    `Forward 1`,
    `Swap 54 47`,
    `Gift 1 20`,
    `Back 1`,
    `Forward 3`
]);
