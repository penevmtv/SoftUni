// Pesho is a pro gladiator, he is struggling to become master of the Arena. 
// You will receive several input lines in one of the following formats:
// "{gladiator} -> {technique} -> {skill}"
// "{gladiator} vs {gladiator}"
// The gladiator and technique are strings, the given skill will be an integer number. You need to keep track of every gladiator. 
// When you receive a gladiator and his technique and skill, add him to the gladiator pool, if he isn't present, else add his technique
//  or update his skill, only if the current technical skill is lower than the new value.
// If you receive "{gladiator} vs {gladiator}" and both gladiators exist in the tier, they duel with the following rules:
// Compare their techniques, if they got at least one in common, the gladiator with better total skill points wins and the other is demoted from the tier -> remove him.
// If they don't have techniques in common, the duel isn't happening and both continue in the Season.
// You should end your program when you receive the command "Ave Cesar". At that point, you should print the gladiators,
//  ordered by total skill in descending order, then ordered by name in ascending order. Foreach gladiator prints their technique and skill ordered descending,
//   then ordered by technique name in ascending order.
// Input / Constraints
// You will receive an array of strings as a parameter to your solution.
// •	The input comes in the form of commands in one of the formats specified above.
// •	Gladiator and technique will always be one-word string, containing no whitespaces.
// •	Skill will be an integer in the range [0, 1000].
// •	There will be no invalid input lines.
// •	The program ends when you receive the command "Ave Cesar".
// Output
// •	The output format for each gladiator is:
// "{gladiator}: {totalSkill} skill"
// "- {technique} <!> {skill}"




function arenaTier(arrOfStrs) {
    let gladiatorsMap = new Map();

    let index = 0;
    let input = arrOfStrs[index];
    while (input !== `Ave Cesar`) {

        if (input.includes(`->`)) {

            let [gladiator, technique, skill] = input.split(` -> `);
            skill = Number(skill);

            if (gladiatorsMap.has(gladiator) && gladiatorsMap.get(gladiator).has(technique)) {
                gladiatorsMap.get(gladiator).set(technique, Math.max(gladiatorsMap.get(gladiator).get(technique), skill));        
            } else if (gladiatorsMap.has(gladiator)) {
                gladiatorsMap.get(gladiator).set(technique, skill);
            } else {
                gladiatorsMap.set(gladiator, new Map([[technique, skill]]));
            }

        } else {
            let [gladiator1, gladiator2] = input.split(` vs `);
            if (gladiatorsMap.has(gladiator1) && gladiatorsMap.has(gladiator2)) {
                
                let willBeABattle = false;
                let commonTechniqe = ``;
                let gladiator1Skill = 0;
                for (let [technique, skill] of gladiatorsMap.get(gladiator1).entries()) {
                    if (gladiatorsMap.get(gladiator2).has(technique)) {
                        commonTechniqe = technique;
                        gladiator1Skill = skill;
                        willBeABattle = true;
                        break;
                    }
                }

                if (willBeABattle && gladiator1Skill > gladiatorsMap.get(gladiator2).get(commonTechniqe)) {
                    gladiatorsMap.delete(gladiator2);
                } else if (willBeABattle && gladiator1Skill < gladiatorsMap.get(gladiator2).get(commonTechniqe)) {
                    gladiatorsMap.delete(gladiator1);
                }
            }
        }
        index++;
        input = arrOfStrs[index];
    }

    let sortedGladiators = [...gladiatorsMap.entries()].sort((a, b) => b[1].size - a[1].size);

    for (let [gladiator, techniquesMap] of sortedGladiators) {
        skillSum = 0;
        skillsArr = [...techniquesMap.values()].forEach(x => skillSum += x);
        
        let techniquesEntries = [techniquesMap.entries()].sort((a, b) => {
            if (a[0] !== b[0]) a[0].localeCompare(b[0]);
            else b[1] - a[1];
        })

        console.log(`${gladiator}: ${skillSum} skill`);

        for (let [technique, skill] of techniquesEntries) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }

}
arenaTier([
'Peter -> Duck -> 400',
'Julius -> Shield -> 150',
'Gladius -> Heal -> 200',
'Gladius -> Support -> 250',
'Gladius -> Shield -> 250',
'Peter vs Gladius',
'Gladius vs Julius',
'Gladius vs Maximilian',
'Ave Cesar'
]);
