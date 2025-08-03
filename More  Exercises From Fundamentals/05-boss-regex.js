function solve(arrOfStrs) {
    let workingArr = arrOfStrs.slice(1);

    for (let string of workingArr) {

        let pattern = /^\|([A-Z]{4,})\|:#([a-zA-Z]+ [a-zA-Z]+)#$/;

        let match = string.match(pattern);

        if (match) {
            let bossName = match[1];
            let title = match[2];
            let strength = bossName.length;
            let armor = title.length;

            console.log(`${bossName}, The ${title}`);
            console.log(`>> Strength: ${strength}`);
            console.log(`>> Armor: ${armor}`);
            
        } else {
            console.log(`Access denied!`);
        }
    }
}
solve(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#']);
