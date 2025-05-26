// You will be given 3 parameters. The first parameter will be the name of the town (string), the second – the population (number),
//  and the third – the area (number). 
// First, validate the input data – the town name must be at least 3 characters long, and the population and the area must be positive numbers. 
// •	If the town name is too short, print the following message:
// "Town name must be at least 3 characters!"
// •	If the population or the area is a negative number, print the following message:
// "{Population/Area} must be a positive number!"
// •	If all the data is valid, print it in the following format:
// "Town {town name} has population of {population} and area {area} square km."


function solve(town, population, area) {
    let isValid = true;
    if (town.length < 3) {
        console.log(`Town name must be at least 3 characters!`);
        isValid = false;
    }
    if (population < 0) {
        console.log(`Population must be a positive number!`);
        isValid = false;
    }
    if (area < 0) {
        console.log(`Area must be a positive number!`);
        isValid = false;
    }
    if (isValid) {
        console.log(`Town ${town} has population of ${population} and area ${area} square km.`);
    }
}