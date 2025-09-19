// You will receive a city’s name (string), population (number), and treasury (number) as arguments,
//  which you will need to set as properties of an object and return it.





//Four ways to create a function that returns an object:

const createRecord = (name, population, treasury) => ({ name, population, treasury });

function createRecord(name, population, treasury) {
    return { name, population, treasury };
}

function createRecord(name, population, treasury) {
    const cityObj = {
        name: name,
        population: population,
        treasury: treasury
    }
    return cityObj;
}

function createRecord(name, population, treasury) {
    const cityObj = {};

    cityObj.name = name;
    cityObj.population = population;
    cityObj.treasury = treasury;
    return cityObj;
}

console.log(createRecord(
    'Tortuga',
    7000,
    15000
));
