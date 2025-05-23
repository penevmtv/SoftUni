function solve(arr) {
    let desiredHeight = Number(arr[0]);
    let index = 1;
    let jumpCounter = 0
    let isSuccessfulTry = false;
    let lastHeight = 0;
    for(let neededHeight = desiredHeight - 30; neededHeight < desiredHeight + 5; neededHeight += 5) {
        isSuccessfulTry = false;
        lastHeight = neededHeight;
        for(let currentTry = 1; currentTry <= 3; currentTry++) {
            let successfulHeight = Number(arr[index]);
            jumpCounter++;
            index++;
            if(successfulHeight > neededHeight) {
                isSuccessfulTry = true;
                break;
            }
        }
        if(!isSuccessfulTry) 
            break;
    }
    if(isSuccessfulTry)
        console.log(`Tihomir succeeded, he jumped over ${lastHeight}cm after ${jumpCounter} jumps.`);
    else    
        console.log(`Tihomir failed at ${lastHeight}cm after ${jumpCounter} jumps.`);   
}