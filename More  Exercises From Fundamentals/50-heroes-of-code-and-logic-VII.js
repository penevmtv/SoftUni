// You got your hands on the most recent update on the best MMORPG of all time – Heroes of Code and Logic. 
// You want to play it all day long! So cancel all other arrangements and create your party!
// On the first line of the standard input, you will receive an integer n – the number of heroes that you can choose for your party. 
// On the next n lines, the heroes themselves will follow with their hit points and mana points separated by a single space in the following format: 
// "{hero name} {HP} {MP}"
// -	HP stands for hit points and MP for mana points
// -	a hero can have a maximum of 100 HP and 200 MP
// After you have successfully picked your heroes, you can start playing the game. 
// You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given. 
// There are several actions that the heroes can perform:
// "CastSpell – {hero name} – {MP needed} – {spell name}"
// •	If the hero has the required MP, he casts the spell, thus reducing his MP. Print this message: 
// o	"{hero name} has successfully cast {spell name} and now has {mana points left} MP!"
// •	If the hero is unable to cast the spell print:
// o	"{hero name} does not have enough MP to cast {spell name}!"
// "TakeDamage – {hero name} – {damage} – {attacker}"
// •	Reduce the hero HP by the given damage amount. If the hero is still alive (his HP is greater than 0) print:
// o	"{hero name} was hit for {damage} HP by {attacker} and now has {current HP} HP left!"
// •	If the hero has died, remove him from your party and print:
// o	"{hero name} has been killed by {attacker}!"
// "Recharge – {hero name} – {amount}"
// •	The hero increases his MP. If it brings the MP of the hero above the maximum value (200), MP is increased to 200.
//  (the MP can't go over the maximum value).
// •	 Print the following message:
// o	"{hero name} recharged for {amount recovered} MP!"
// "Heal – {hero name} – {amount}"
// •	The hero increases his HP. If a command is given that would bring the HP of the hero above the maximum value (100),
//  HP is increased to 100 (the HP can't go over the maximum value).
// •	 Print the following message:
// o	"{hero name} healed for {amount recovered} HP!"
// Input
// •	On the first line of the standard input, you will receive an integer n.
// •	On the following n lines, the heroes themselves will follow with their hit points and mana points separated by a space in the following format.
// •	You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given.
// Output
// •	Print all members of your party who are still alive, in the following format (their HP/MP need to be indented 2 spaces):
// "{hero name}
//   HP: {current HP}
//   MP: {current MP}"
// Constraints
// •	The starting HP/MP of the heroes will be valid, 32-bit integers will never be negative or exceed the respective limits.
// •	The HP/MP amounts in the commands will never be negative.
// •	The hero names in the commands will always be valid members of your party. No need to check that explicitly.




function heroesOfCodeAndLogic(inputArr) {
    const numHeroes = Number(inputArr[0]);

    let heroesObj = {};

    for (let i = 1; i <= numHeroes; i++) {
        const [name, hpStr, mpStr] = inputArr[i].split(` `);
        const hp = Number(hpStr);
        const mp = Number(mpStr);

        heroesObj[name] = {hitPoints: hp, mana: mp};
    }

    let index = numHeroes + 1;
    while (inputArr[index] !== `End`) {
        const [command, ...heroInfo] = inputArr[index].split(` - `);

        if (command === `CastSpell`) {
            const [name, neededMpStr, spellName] = heroInfo;
            const neededMp = Number(neededMpStr);

            if (heroesObj[name].mana >= neededMp) {
                heroesObj[name].mana -= neededMp;
                
                console.log(`${name} has successfully cast ${spellName} and now has ${heroesObj[name].mana} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }

        } else if (command === `TakeDamage`) {
            const [name, damageStr, attacker] = heroInfo;
            const damage = Number(damageStr);

            if (heroesObj[name].hitPoints > damage) {
                heroesObj[name].hitPoints -= damage;

                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroesObj[name].hitPoints} HP left!`);

            } else {
                delete heroesObj[name];

                console.log(`${name} has been killed by ${attacker}!`);
            }

        } else if (command === `Recharge`) {
            const [name, amountMpStr] = heroInfo;
            const amountMp = Number(amountMpStr);

            const currentMp = heroesObj[name].mana;
            heroesObj[name].mana = Math.min(currentMp + amountMp, 200);
            const recovered = heroesObj[name].mana - currentMp;

            console.log(`${name} recharged for ${recovered} MP!`);

        } else if (command === `Heal`) {
            const [name, amountHpStr] = heroInfo;
            const amountHp = Number(amountHpStr);

            const currentHp = heroesObj[name].hitPoints;
            heroesObj[name].hitPoints = Math.min(currentHp + amountHp, 100);
            const recovered = heroesObj[name].hitPoints - currentHp;

            console.log(`${name} healed for ${recovered} HP!`);
        }
        index++;
    }

    for (const [name, infoObj] of Object.entries(heroesObj)) {

        console.log(`${name}\n  HP: ${infoObj.hitPoints}\n  MP: ${infoObj.mana}`);
    }
}
heroesOfCodeAndLogic([
"4",
"Adela 90 150",
"SirMullich 70 40",
"Ivor 1 111",
"Tyris 94 61",
"Heal - SirMullich - 50",
"Recharge - Adela - 100",
"CastSpell - Tyris - 1000 - Fireball",
"TakeDamage - Tyris - 99 - Fireball",
"TakeDamage - Ivor - 3 - Mosquito",
"End"
]);
