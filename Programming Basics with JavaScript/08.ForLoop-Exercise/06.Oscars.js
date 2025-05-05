function solve(arr) {
    let actor = arr[0];
    let points = Number(arr[1]);
    let nRef = Number(arr[2]);
    let isPointEnough = false;

    for (let i = 3; i < nRef * 2 + 3; i += 2) {
        let nameLenght = arr[i].length
        points += (Number(arr[i + 1]) * nameLenght) / 2;
        if (points > 1250.5) { 
            isPointEnough = true;
            break;
        }
    }
    if (isPointEnough)
        console.log(`Congratulations, ${actor} got a nominee for leading role with ${points.toFixed(1)}!`);
    else
        console.log(`Sorry, ${actor} you need ${(1250.5 - points).toFixed(1)} more!`);        
}