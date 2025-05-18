function solve(arr) {
    let index = 0;
    let oneBitcoin = 11949.16;
    let oneGramGold = 67.51;
    let allBitcoins = 0;
    let firstBitcoinDay = 0;
    let moneyLv = 0;
    for (let currentDay = 1; currentDay <= arr.length; currentDay++) {
        let dayGold = arr[index];
        if (currentDay % 3 === 0) {
            dayGold *= 0.7;
        }
        moneyLv += dayGold * oneGramGold;
        if (moneyLv >= oneBitcoin) {
            let bayingBitcoins = Math.floor(moneyLv / oneBitcoin);
            allBitcoins += bayingBitcoins;
            moneyLv = (moneyLv % (oneBitcoin * bayingBitcoins));
            if (firstBitcoinDay === 0) {
                firstBitcoinDay = currentDay;
            }
        } 
        index++;
    }
    console.log(`Bought bitcoins: ${allBitcoins}`);
    if (allBitcoins > 0) 
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    console.log(`Left money: ${moneyLv.toFixed(2)} lv.`);     
}