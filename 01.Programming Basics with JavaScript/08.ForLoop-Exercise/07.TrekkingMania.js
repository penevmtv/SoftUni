function solve(arr) {
    let nGroups = Number(arr[0]);
    let allPeople = 0;
    let musCount = 0;
    let monCount = 0;
    let kiliCount = 0;
    let k2Count = 0;
    let everestCount = 0;

    for (let i = 1; i <= nGroups; i++) {
        groupPeople = Number(arr[i]);
        allPeople += groupPeople;
        if (groupPeople < 6)
            musCount += groupPeople;
        else if (groupPeople < 13)
            monCount += groupPeople;
        else if (groupPeople < 26)
            kiliCount += groupPeople;
        else if (groupPeople < 41)
            k2Count += groupPeople;
        else
            everestCount += groupPeople;
    }
    console.log(`${((musCount / allPeople) * 100).toFixed(2)}%`);
    console.log(`${((monCount / allPeople) * 100).toFixed(2)}%`);
    console.log(`${((kiliCount / allPeople) * 100).toFixed(2)}%`);
    console.log(`${((k2Count / allPeople) * 100).toFixed(2)}%`);
    console.log(`${((everestCount / allPeople) * 100).toFixed(2)}%`);
    
}