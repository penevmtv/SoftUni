// You will be given an array of strings.
// The first element will be a string containing wagons (numbers). Each number inside the string represents 
// the number of passengers that are currently in a wagon. 
// The second element in the array will be the max capacity of each wagon (single number).
// The rest of the elements will be commands in the following format:
// •	Add {passengers} – add a wagon to the end with the given number of passengers.
// •	{passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)
// At the end, print the final state of the train (all the wagons separated by a space).


function train(arrOfStrings) {

    let wagons = arrOfStrings.shift().split(` `).map(Number);
    let maxCapacity = Number(arrOfStrings.shift());

    for (let i = 0; i < arrOfStrings.length; i++) {
        let input = arrOfStrings[i].split(` `);

        if (input.includes(`Add`)) {
            let passengersInNewWagon = Number(input[1]);
            wagons.push(passengersInNewWagon);
        } else {
            let newPassengers = Number(input);
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + newPassengers <= maxCapacity) {
                    wagons[i] += newPassengers;
                    break;
                }
            }
        }
    }
    return wagons.join(` `);
}
console.log(train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']));
