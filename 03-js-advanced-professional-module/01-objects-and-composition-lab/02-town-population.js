// You have been tasked to create a registry for different towns and their population.
// Input
// The input comes as array of strings. 
// Each element will contain data for a town and its population in the following format: "{towntown} <-> {townPopulation}"
// If you receive the same town twice, you should add the given population to the current one.
// Output
// As output, you must print all the towns and their population.




function townPopulation(arrOfStrs) {

    function addTown(obj, town, population) {
        if (obj[town]) population += obj[town];
        return obj[town] = population;
    }

    const townsObj = {};
    for (const string of arrOfStrs) {
        const [town, populationStr] = string.split(` <-> `);
        let population = Number(populationStr);

        addTown(townsObj, town, population);
    }

    for (const town in townsObj) {
        console.log(town + ` : ` + townsObj[town]);
    }
}
townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);
