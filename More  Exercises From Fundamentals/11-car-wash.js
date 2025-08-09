// Write a JS function that receives some commands. Depending on the command, add or subtract a percentage of how much the car is cleaned or dirty. 
// Start from 0. The first command will always be 'soap':
// •	soap – add 10 to the value
// •	water – increase the value by 20%
// •	vacuum cleaner – increase the value by 25%
// •	mud – decrease the value by 10%
// The input comes as an array of strings. When finished cleaning the car, print the resulting value in the format:
//              `The car is {value}% clean.`
//   Note: The value should be rounded to the second decimal point.




function carWash(arrOfStrs) {
    let value = 0;

    function soap(x) {
        return x + 10;
    }

    function water(x) {
        return x * 1.2;
    }

    function vacuumCleaner(x) {
        return x * 1.25;
    }

    function mud(x) {
        return x * 0.9;
    }

    for (let command of arrOfStrs) {

        switch (command) {
            case `soap`:
                value = soap(value);
                break;
            case `water`:
                value = water(value);
                break;
            case `vacuum cleaner`:
                value = vacuumCleaner(value);
                break;
            case `mud`:
                value = mud(value);
        }
    }

    return `The car is ${value.toFixed(2)}% clean.`
}
console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));
