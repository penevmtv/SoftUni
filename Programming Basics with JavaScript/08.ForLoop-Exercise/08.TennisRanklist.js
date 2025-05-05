function solve(arr) {
    let nTour = Number(arr[0]);
    let firstPoints = Number(arr[1]);
    let tourPoints = 0;
    let winCount = 0;
    for (let i = 2; i <= nTour + 1; i++) {
        let result = arr[i];
        if (result === `W`) { 
            tourPoints += 2000;
            winCount++;
        }
        else if(result === `F`)
            tourPoints += 1200;
        else if (result === `SF`)
            tourPoints += 720;
    }
    let averagePoints = tourPoints / nTour;
    let percentWins = (winCount / nTour) * 100;
    console.log(`Final points: ${firstPoints + tourPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${percentWins.toFixed(2)}%`);
}