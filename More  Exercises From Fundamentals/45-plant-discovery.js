// You have now returned from your world tour. On your way, you have discovered some new plants,
//  and you want to gather some information about them and create an exhibition to see which plant is highest rated.
// On the first line, you will receive a number n. On the next n lines, you will be given some information about the plants
//  that you have discovered in the format: "{plant}<->{rarity}". Store that information because you will need it later. 
//  If you receive a plant more than once, update its rarity.
// After that, until you receive the command "Exhibition", you will be given some of these commands:
// •	"Rate: {plant} - {rating}" – add the given rating to the plant (store all ratings)
// •	"Update: {plant} - {new_rarity}" – update the rarity of the plant with the new one
// •	"Reset: {plant}" – remove all the ratings of the given plant
// Note: If any given plant name is invalid, print "error"
// After the command "Exhibition", print the information that you have about the plants in the following format:
// "Plants for the exhibition:
// - {plant_name1}; Rarity: {rarity}; Rating: {average_rating}
// - {plant_name2}; Rarity: {rarity}; Rating: {average_rating}
// …
// - {plant_nameN}; Rarity: {rarity}; Rating: {average_rating}"
// The average rating should be formatted to the second decimal place.
// Input / Constraints
// •	You will receive the input as described above.
// •	JavaScript: you will receive a list of strings.
// Output
// •	Print the information about all plants as described above.




function plantDiscovery(inputArr) {
    const numPlants = Number(inputArr[0]);

    let plantsObj = {};

    for (let i = 1; i <= numPlants; i++) {
        const [plant, rarity] = inputArr[i].split(`<->`);
        plantsObj[plant] = {rarity: rarity, ratings: []};
    }

    let index = numPlants + 1;
    while (inputArr[index] !== `Exhibition` && index < inputArr.length) {
        const [command, info] = inputArr[index].split(`: `);
        const [plant, data] = info.split(` - `);

        if (!Object.keys(plantsObj).some(key => key === plant)) {
            console.log(`error`);
            index++;
            continue;
        }
        
        if (command === `Rate`) {

            plantsObj[plant].ratings.push(Number(data));

        } else if (command === `Update`) {
            
            plantsObj[plant].rarity = data;

        } else if (command === `Reset`) {

            plantsObj[plant].ratings = [];
        }

        index++;
    }

    console.log(`Plants for the exhibition:`);

    for (const [plantName, infoObj] of Object.entries(plantsObj)) {
        const ratingsSum = infoObj.ratings.reduce((sum, rating) => sum += rating, 0);
        const averageRating = (ratingsSum / infoObj.ratings.length) || 0;

        console.log(`- ${plantName}; Rarity: ${infoObj.rarity}; Rating: ${averageRating.toFixed(2)}`);
    }
}
plantDiscovery([
"3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"
]);

