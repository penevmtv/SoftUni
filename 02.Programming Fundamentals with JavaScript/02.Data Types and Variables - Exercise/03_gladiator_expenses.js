// As a gladiator, Peter has to repair his broken equipment when he loses a fight. His equipment consists of a helmet, sword,
//  shield, and armor. 
//  You will receive Peter`s lost fights count. 
// •	Every second lost game, his helmet is broken.
// •	Every third lost game, his sword is broken.
// •	When both his sword and helmet are broken in the same lost fight, his shield also breaks.
// •	Every second time, when his shield brakes, his armor also needs to be repaired. 
// You will receive the price of each item in his equipment. Calculate his expenses for the year for renewing his equipment. 

function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    for (let currentLoss = 1; currentLoss <= lostFights; currentLoss++) {
        if (currentLoss % 2 === 0) {
            expenses += helmetPrice;
        } 
        if (currentLoss % 3 === 0) {
            expenses += swordPrice;
        } 
        if (currentLoss % 6 === 0) {
            expenses += shieldPrice;
        } 
        if (currentLoss % 12 === 0) {
            expenses += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}