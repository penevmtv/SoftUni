function solve(arr) {
    let freeVolume = Number(arr[0]) * Number(arr[1]) * Number(arr[2]);
    let neededSpace = 0;
    let index = 3;
    let isNoSpace = false;
    while (arr[index] !== `Done`) {
        let nBoxes = Number(arr[index]);
        if (freeVolume >= nBoxes) {
            freeVolume -= nBoxes;
        } else {
            neededSpace = nBoxes - freeVolume;
            isNoSpace = true;
            break;
        }
        index++;
    }
    if (!isNoSpace) {
        console.log(`${freeVolume} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${neededSpace} Cubic meters more.`);
    }
}