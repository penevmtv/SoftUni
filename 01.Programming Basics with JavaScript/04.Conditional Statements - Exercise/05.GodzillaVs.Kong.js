function godzillaVsKong(budget, nStat, wearPriceForOneStat) {
    let decor = budget * 0.1;

    let allWearPrice = nStat * wearPriceForOneStat;

    if (nStat > 150)
        allWearPrice *= 0.9;

    let allCosts = decor + allWearPrice;

    let diff = Math.abs(budget - allCosts);

    if (allCosts > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}