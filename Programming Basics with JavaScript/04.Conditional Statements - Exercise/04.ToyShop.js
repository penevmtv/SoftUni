function toyShop(travelPrice, nPuzzles, nDolls, nBears, nMinions, nTrucks) {
    let puzzlesPrice = nPuzzles * 2.6;
    let dollsPrice = nDolls * 3;
    let bearsPrice = nBears * 4.1;
    let minionsPrice = nMinions * 8.2;
    let trucksPrice = nTrucks * 2;
    
    let nAllToys = nPuzzles + nDolls + nBears + nMinions + nTrucks;
    let priceAllToys = puzzlesPrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;

    if (nAllToys >= 50) 
        priceAllToys *= 0.75;

    priceAllToys *= 0.9;

    let diff = Math.abs(priceAllToys - travelPrice);


    if (priceAllToys >= travelPrice)
        console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    else
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
               
}