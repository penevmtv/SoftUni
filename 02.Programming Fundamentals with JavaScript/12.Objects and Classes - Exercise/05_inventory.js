// Create a function, which creates a register for heroes, with their names, level, and items (if they have such). 
// The input comes as an array of strings. Each element holds data for a hero, in the following format:
// "{heroName} / {heroLevel} / {item1}, {item2}, {item3}..." 
// You must store the data about every hero. The name is a string, a level is a number and the items are all strings.
// The output is all of the data for all the heroes you’ve stored sorted ascending by level. The data must be in the following format for each hero:
// Hero: {heroName}
// level => {heroLevel}
// Items => {item1}, {item2}, {item3}





function inventory(arrOfStr) {
    let heroesArr = [];

    for (let element of arrOfStr) {
        let [heroName, heroLevel, heroItems] = element.split(` / `);
        heroLevel = Number(heroLevel);

        let heroObj = {
            heroName: heroName,
            level: heroLevel,
            items: heroItems
        }
        heroesArr.push(heroObj);
    }
    heroesArr.sort((a, b) => a.level - b.level);

    for (let heroObj of heroesArr) {
        console.log(`Hero: ${heroObj.heroName}`);
        console.log(`level => ${heroObj.level}`);
        if (heroObj.items) {
            console.log(`items => ${heroObj.items}`);
        }
    }
}
inventory([
    'Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);


