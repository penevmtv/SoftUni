function shopping(budget, nVideo, nProces, nRam) {
    let videoPrice = nVideo * 250;
    let procesPrice = 0.35 * videoPrice * nProces;
    let ramPrice = 0.1 * videoPrice * nRam;

    let sum = videoPrice + procesPrice + ramPrice;

    if (nVideo > nProces)
        sum *= 0.85;

    let diff = Math.abs(budget - sum);

    if (budget >= sum)
        console.log(`You have ${diff.toFixed(2)} leva left!`);
    else
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
           
}