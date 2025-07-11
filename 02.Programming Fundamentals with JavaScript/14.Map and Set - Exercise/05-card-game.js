// You are given a sequence of people and for every person what cards he draws from the deck. 
// The input will be an array of strings. Each string will be in the format:
// {personName}: {PT, PT, PT,… PT}
// Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type.
//  The name can contain any ASCII symbol except ':'. The input will always be valid and in the format described, there is no need to check it.
// A single person cannot have more than one card with the same power and type, if he draws such a card he discards it.
//  The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type.
//   Powers 2 to 10 have the same value and J to A are 11 to 14. Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).
// Finally print out the total value each player has in his hand in the format:




function cardGame(arrOfStr) {
    let playersMap = new Map();
    
    for (let element of arrOfStr) {
        let [playerName, playerCards] = element.split(`: `);
        let cardsArr = playerCards.split(`, `);

        if (!playersMap.has(playerName)) { 
            playersMap.set(playerName,new Set());
        }

        let cards = playersMap.get(playerName);
        for (let card of cardsArr) {
            cards.add(card);
        }
    }
    const powerMap = new Map([
        [`J`, 11],
        [`Q`, 12],
        [`K`, 13],
        [`A`, 14]   
    ]);

    const typeMap = new Map([
        [`S`, 4],
        [`H`, 3],
        [`D`, 2],
        [`C`, 1]
    ]);

    for (let [name, playerCards] of playersMap) {
        let totalValue = 0;
        for (let card of playerCards) {
            let power = card.slice(0, -1);
            let type =  card.slice(-1); 

            power = powerMap.get(power) || Number(power);
            let typevalue = typeMap.get(type);

            totalValue += power * typevalue;
        }
        console.log(`${name}: ${totalValue}`);
    }
}
cardGame([
'Peter: 2C, 4H, 9H, AS, QS',
'Tomas: 3H, 10S, JC, KD, 5S, 10S',
'Andrea: QH, QC, QS, QD',
'Tomas: 6H, 7S, KC, KD, 5S, 10C',
'Andrea: QH, QC, JS, JD, JC',
'Peter: JD, JD, JD, JD, JD, JD'
]
);