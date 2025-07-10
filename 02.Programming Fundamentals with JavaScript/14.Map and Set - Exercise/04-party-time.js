// There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. 
// When guests come to the party check if he/she contains in any of the two reservation lists. 
// The input will come as an array of strings. You will be given the list with the guests before you receive a command "PARTY".
// All VIP numbers start with a digit.
// When you receive the command "PARTY", the guests start coming.
// Print the count of guests then all guests, who didn't come to the party (VIP must be printed first). 
// Hint: Guest names are not unique. Only the first match is removed when receiving a name.




function partyTime(arrOfStr) {
    let partyIndex = arrOfStr.indexOf(`PARTY`);

    let guestsInListArr = arrOfStr.slice(0, partyIndex);
    let comingGuestsArr = arrOfStr.slice(partyIndex + 1);

    for (let guest of comingGuestsArr) {
        if (guestsInListArr.includes(guest)) {
            guestsInListArr.splice(guestsInListArr.indexOf(guest), 1);
        }
    }

    sortedMissingGuestsMap = new Map([[`vip`, []], [`regular`, []]]);

    for (let guest of guestsInListArr) {
        if (guest[0] == Number(guest[0])) {
            sortedMissingGuestsMap.get(`vip`).push(guest);
        } else {
            sortedMissingGuestsMap.get(`regular`).push(guest);
        }
    }
    console.log(guestsInListArr.length);

    for (let guest of sortedMissingGuestsMap.get(`vip`)) {
        console.log(guest);
    }
    for (let guest of sortedMissingGuestsMap.get(`regular`)) {
        console.log(guest);
    }
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
);
