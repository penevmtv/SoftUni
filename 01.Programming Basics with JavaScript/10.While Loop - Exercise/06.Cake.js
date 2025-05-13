function solve(arr) {
    let allPieces = Number(arr[0]) * Number(arr[1]);
    let index = 2;
    let isNoMorePieces = false;
    let neededPieces = 0;
    while (arr[index] !== `STOP`) {
        let currentPieces = Number(arr[index]);
        if (allPieces >= currentPieces) {
            allPieces -= currentPieces;
        } else {
            isNoMorePieces = true;
            neededPieces = currentPieces - allPieces;
            break;
        }
        index++; 
    }
    if (!isNoMorePieces) {
        console.log(`${allPieces} pieces are left.`);
    } else {
       console.log(`No more cake left! You need ${neededPieces} pieces more.`); 
    }
}