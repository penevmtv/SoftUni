// The pirates encounter a huge Man-O-War at sea. 
// Create a program that tracks the battle and either chooses a winner or prints a stalemate. 
// On the first line, you will receive the status of the pirate ship, which is a string representing integer sections separated by ">". 
// On the second line, you will receive the same type of status, but for the warship: 
// "{section1}>{section2}>{section3}… {sectionn}"
// On the third line, you will receive the maximum health capacity a section of the ship can reach. 
// The following lines represent commands until "Retire":
// •	"Fire {index} {damage}" - the pirate ship attacks the warship with the given damage at that section. 
// Check if the index is valid and if not, skip the command. If the section breaks (health <= 0) the warship sinks,
//  print the following and stop the program: "You won! The enemy ship has sunken."
// •	"Defend {startIndex} {endIndex} {damage}" - the warship attacks the pirate ship with the given damage at that range (indexes are inclusive). 
// Check if both indexes are valid and if not, skip the command. If the section breaks (health <= 0) the pirate ship sinks, print the following and stop the program:
// "You lost! The pirate ship has sunken."
// •	"Repair {index} {health}" - the crew repairs a section of the pirate ship with the given health. Check if the index is valid and if not, skip the command. 
// The health of the section cannot exceed the maximum health capacity.
// •	"Status" - prints the count of all sections of the pirate ship that need repair soon, which are all sections that are lower than 20% of the maximum health capacity. 
// Print the following:
// "{count} sections need repair."
// In the end, if a stalemate occurs, print the status of both ships, which is the sum of their individual sections, in the following format:
// "Pirate ship status: {pirateShipSum}
// Warship status: {warshipSum}"
// Input
// •	On the 1st line, you are going to receive the status of the pirate ship (integers separated by '>').
// •	On the 2nd line, you are going to receive the status of the warship.
// •	On the 3rd line, you will receive the maximum health a section of a ship can reach.
// •	On the following lines, until "Retire", you will be receiving commands.
// Output
// •	Print the output in the format described above.
// Constraints
// •	The section numbers will be integers in the range [1….1000].
// •	The indexes will be integers [-200….200].
// •	The damage will be an integer in the range [1….1000].
// •	The health will be an integer in the range [1….1000].




function manOWar(inputArr) {
    const [pirateShipStr, warshipStr, maxHealthStr, ... commandsArr] = inputArr;
    
    let pirateShip = pirateShipStr.split(`>`).map(Number);
    let warship = warshipStr.split(`>`).map(Number);
    const maxHealth = Number(maxHealthStr);

    let index = 0;
    while (commandsArr[index] !== `Retire` && index < commandsArr.length) {
        const [command, ...dataArr] = commandsArr[index].split(` `);

        if (command === `Fire`) {
            const [idx, damage] = dataArr.map(Number);

            if (idx >= 0 && idx < warship.length) {

                if (warship[idx] <= damage) {
                    console.log(`You won! The enemy ship has sunken.`);
                    return;
                } else {
                    warship[idx] -= damage;
                }
            }
        } else if (command === `Defend`) {
            const [firstIndex, secondIndex, damage] = dataArr.map(Number);

            const indexesArr = [firstIndex, secondIndex];
            if (indexesArr.every(idx => idx >= 0 && idx < pirateShip.length)) {
                const startIndex = Math.min(firstIndex, secondIndex);
                const endIndex = Math.max(firstIndex, secondIndex);  

                for (let i = startIndex; i <= endIndex; i++) {

                    if (pirateShip[i] <= damage) {
                        console.log(`You lost! The pirate ship has sunken.`);
                        return;
                    } else {
                        pirateShip[i] -= damage;
                    }
                }
            }
        } else if (command === `Repair`) {
            const [idx, health] = dataArr.map(Number);

            if (idx >= 0 && idx < pirateShip.length) {
                pirateShip[idx] = Math.min(pirateShip[idx] + health, maxHealth);
            }
        } else if (command === `Status`) {
            let repairCounter = 0;

            pirateShip.forEach(x => {
                if (x < maxHealth * 0.2) repairCounter++;
            })  

            console.log(`${repairCounter} sections need repair.`);
        }
        index++;
    }
    const pirateShipSum = pirateShip.reduce((sum, num) => sum += num, 0);
    const warshipSum = warship.reduce((sum, num) => sum += num, 0);

    console.log(`Pirate ship status: ${pirateShipSum}`);
    console.log(`Warship status: ${warshipSum}`);
}
manOWar([
"12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"
]);
