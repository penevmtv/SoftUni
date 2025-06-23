// Write a program that helps you keep track of your shot targets. You will receive a sequence with integers, separated by a single space, representing targets and their value. Afterward, you will be receiving indices until the "End" command is given, and you need to print the targets and the count of shot targets.

// Every time you receive an index, you need to shoot the target on that index, if it is possible.

// Every time you shoot a target, its value becomes -1, and it is considered a shot. Along with that, you also need to:

// · Reduce all the other targets, which have greater values than your current target, with its value.

// · Increase all the other targets, which have less than or equal value to the shot target, with its value.

// Keep in mind that you can't shoot a target, which is already shot. You also can't increase or reduce a target, which is considered a shot.

// When you receive the "End" command, print the targets in their current state and the count of shot targets in the following format:

// "Shot targets: {count} -> {target1} {target2}… {targetn}"

// Input / Constraints

// · On the first line of input, you will receive a sequence of integers, separated by a single space – the targets sequence.

// · On the following lines, until the "End" command, you be receiving integers each on a single line – the index of the target to be shot.

// Output

// · The format of the output is described above in the problem description. 



function shootForTheWin(arrOfStrings) {
    let copyArrOfStr = arrOfStrings.slice();
    let targetsArr = copyArrOfStr.shift().split(` `).map(Number);
    let targetShotsCount = 0;

    let index = 0;
    while (copyArrOfStr[index] !== `End`) {
        let targetIndex = Number(copyArrOfStr[index]);

        if (targetIndex >= 0 && targetIndex < targetsArr.length) {
            targetShotsCount++;
            let currentTarget = targetsArr[targetIndex];
            targetsArr[targetIndex] = -1;

            targetsArr = targetsArr.map(x => {
                if (x <= currentTarget && x !== -1) {
                    return x += currentTarget;
                } else if (x > currentTarget && x !== -1) {
                    return x -= currentTarget;
                } else {
                    return x;
                }
            });
        }
        index++;
    }
    return `Shot targets: ${targetShotsCount} -> ${targetsArr.join(` `)}`;
}
console.log(shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]));