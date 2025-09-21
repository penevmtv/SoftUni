// This task is an extension of Problem 1, you may use your solution from that task as a base.
// You will receive a city’s name (string), population (number), and treasury (number) as arguments,
//  which you will need to set as properties of an object and return it. In addition to the input parameters,
//  the object must have a property taxRate with an initial value of 10, and three methods for managing the city:
// •	collectTaxes() - Increase treasury by  population * taxRate
// •	applyGrowth(percent) - Increase population by given percent
// •	applyRecession(percent) - Decrease treasury by given percent
// Round down the values after each calculation.
// Input
// Your solution will receive three valid parameters. The methods that expect parameters will be tested with valid input.
// Output
// Return an object as described above. The methods of the object modify the object and don’t return anything.




function cityTaxes(name, population, treasury) {
    const townObj = { name, population, treasury };
    townObj.taxRate = 10;

    function increaseTreasury(treasury, population, taxRate) {
        Math.floor(this.treasury += (this.population * this.taxRate));
    }
    function increasePopulation(percent, population) {
        Math.floor(this.population += (this.population * (percent / 100)));
    }
    function decreaseTreasury(percent, treasury) {
        Math.floor(this.treasury -= (this.treasury * (percent / 100)));
    }

    townObj.collectTaxes = increaseTreasury;
    townObj.applyGrowth = increasePopulation;
    townObj.applyRecession = decreaseTreasury;

    return townObj;
}

//Short version of solution.

function createRecord(name, population, treasury) {
    return {
        name, population, treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession(percent) {
            this.treasury -= Math.floor(this.treasury * percent / 100);
        },
    };
}
cityTaxes(
    'Tortuga',
    7000,
    15000
);
