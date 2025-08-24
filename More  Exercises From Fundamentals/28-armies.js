// Write a function that stores information about an army leader and his armies. The input will be an array of strings. 
// The strings can be in some of the following formats:
// "{leader} arrives" – add the leader (no army)
// "{leader}: {army name}, {army count}" – add the army with its count to the leader (if he exists)
// "{army name} + {army count}" – if the army exists somewhere add the count
// "{leader} defeated" – delete the leader and his army (if he exists)
// When finished reading the input sort the leaders by total army count in descending. Then each army should be sorted by count in descending.
// Output
// Print in the following format:
// "{leader one name}: {total army count}
// >>> {armyOne name} - {army count}
// >>> {armyTwo name} - {army count}
//  …
// {leader two name}: {total army count}
// …"
// Constrains
// •	The new leaders will always be unique
// •	When adding a new army to the leader, the army will be unique




function armies(arrOfStrs) {

    let leadersObj = {};

    for (let string of arrOfStrs) {

        if (string.includes(`arrives`)) {
            const leader = string.split(` arrives`)[0];

            if (!leadersObj.hasOwnProperty(leader)) {
                leadersObj[leader] = {};
            }
            
        } else if (string.includes(`defeated`)) {
            const leader = string.split(` defeated`)[0];
            delete leadersObj[leader];

        } else if (string.includes(`: `)) {
            const [leader, ...restStr] = string.split(`: `);
            const [armyName, armyCount] = restStr[0].split(`, `);

            if (leadersObj.hasOwnProperty(leader)) {
                leadersObj[leader][armyName] = Number(armyCount);
            }

        } else if (string.includes(` + `)) {
            const [armyName, armyCount] = string.split(` + `);

            for (const obj of Object.values(leadersObj)) {
                if (obj.hasOwnProperty(armyName)) {
                    obj[armyName] += Number(armyCount);
                }
            }
        }
    }

    let leadersArr = Object.entries(leadersObj);

    leadersArr.sort((a, b) => {
        const bSum = Object.values(b[1]).reduce((sum, x) => sum += x, 0);
        const aSum = Object.values(a[1]).reduce((sum, x) => sum += x, 0);

        return bSum - aSum;
    })

    for (const [leader, obj] of leadersArr) {

        let armyCounter = 0;
        for (const value of Object.values(obj)) {
            armyCounter += value;
        }

        console.log(`${leader}: ${armyCounter}`);

        const sortedArmy = Object.entries(obj).sort((a, b) => b[1] - a[1]);

        for (const [name, count] of sortedArmy) {
            console.log(`>>> ${name} - ${count}`);
        }
    }
}
armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
]);
