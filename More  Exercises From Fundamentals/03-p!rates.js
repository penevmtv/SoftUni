// Anno 1681. The Caribbean. The golden age of piracy. You are a well-known pirate captain by the name of Jack Daniels. 
// Together with your comrades Jim (Beam) and Johnny (Walker), you have been roaming the seas, looking for gold and treasure…
//  and the occasional killing, of course. Go ahead, target some wealthy settlements and show them the pirate's way!
// Until the "Sail" command is given, you will be receiving:
// · You and your crew have targeted cities, with their population and gold, separated by "||".
// · If you receive a city that has already been received, you have to increase the population and gold with the given values.
// After the "Sail" command, you will start receiving lines of text representing events until the "End" command is given.
// Events will be in the following format:
// · "Plunder=>{town}=>{people}=>{gold}"
// o You have successfully attacked and plundered the town, killing the given number of people and stealing the respective amount of gold.
// o For every town you attack print this message: "{town} plundered! {gold} gold stolen, {people} citizens killed."
// o If any of those two values (population or gold) reaches zero, the town is disbanded.
// § You need to remove it from your collection of targeted cities and print the following message: "{town} has been wiped off the map!"
// o There will be no case of receiving more people or gold than there is in the city.
// · "Prosper=>{town}=>{gold}"
// o There has been dramatic economic growth in the given city, increasing its treasury by the given amount of gold.
// o The gold amount can be a negative number, so be careful. If a negative amount of gold is given, print: "Gold added
//  cannot be a negative number!" and ignore the command.
// o If the given gold is a valid amount, increase the town's gold reserves by the respective amount and print the following message:
// "{gold added} gold added to the city treasury. {town} now has {total gold} gold."
// Input
// · On the first lines, until the "Sail" command, you will be receiving strings representing the cities with their gold and population, separated by "||".
// · On the following lines, until the "End" command, you will be receiving strings representing the actions described above, separated by "=>".
// Output
// · After receiving the "End" command, if there are any existing settlements on your list of targets, you need to print all of them, in the following format:
// "Ahoy, Captain! There are {count} wealthy settlements to go to:
// {town1} -> Population: {people} citizens, Gold: {gold} kg
// {town2} -> Population: {people} citizens, Gold: {gold} kg
// …
// {town…n} -> Population: {people} citizens, Gold: {gold} kg"
// · If there are no settlements left to plunder, print:
// "Ahoy, Captain! All targets have been plundered and destroyed!"
// Constraints
// · The initial population and gold of the settlements will be valid 32-bit integers, never negative, or exceed the respective limits.
// · The town names in the events will always be valid towns that should be on your list. 



function pirates(arrOfStrs) {

    let  citiesMap = new Map();

    let index = 0;
    let input = arrOfStrs[index];  
    while (input !== `Sail`) {

        let [city, population, gold] = input.split(`||`);
        population = Number(population);
        gold = Number(gold);

        if (citiesMap.has(city)) {
            
            let currentPopulation = citiesMap.get(city).get(`population`);
            let currentGold = citiesMap.get(city).get(`gold`);

            citiesMap.get(city).set(`population`, currentPopulation + population);
            citiesMap.get(city).set(`gold`, currentGold + gold);
        } else {
            citiesMap.set(city, new Map([[`population`, population], [`gold`, gold]]));
        }
        index++;
        input = arrOfStrs[index];
    }
    
    let sailIndex = arrOfStrs.indexOf(`Sail`);
    let arrOf2Strs = arrOfStrs.slice(sailIndex + 1);

    let i = 0;
    while (arrOf2Strs[i] !== `End`) {

        let inputArr = arrOf2Strs[i].split(`=>`);
        let command = inputArr.shift();

        if (command === `Plunder`) {
            
            let [town, people, gold] = inputArr;
            people = Number(people);
            gold = Number(gold);

            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            let currentPopulation = citiesMap.get(town).get(`population`);
            let currentGold = citiesMap.get(town).get(`gold`);

            let newPopulation = currentPopulation - people;
            let newGold = currentGold - gold;

            if (newPopulation <= 0 || newGold <= 0) {
                
                console.log(`${town} has been wiped off the map!`);
                citiesMap.delete(town);

            } else {

                citiesMap.get(town).set(`population`, newPopulation);
                citiesMap.get(town).set(`gold`, newGold);

            }
            
        } else {

            let [town, gold] = inputArr;
            gold = Number(gold);

            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
                i++;
                continue;
            }

            let currentGold = citiesMap.get(town).get(`gold`);
            let totalGold = currentGold + gold;

            citiesMap.get(town).set(`gold`, totalGold);

            console.log(`${gold} gold added to the city treasury. ${town} now has ${totalGold} gold.`);
        }

        i++;
    }

    if (citiesMap.size > 0) {

        console.log(`Ahoy, Captain! There are ${citiesMap.size} wealthy settlements to go to:`);
    } else {

        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
    
    for (let [town, map] of citiesMap.entries()) {

        console.log(`${town} -> Population: ${map.get(`population`)} citizens, Gold: ${map.get(`gold`)} kg`);
    }
}
pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"]);
