// Write a function that receives a single parameter – an object, containing five properties:
// { name, area, population, country, postcode }
// Loop through all the keys and print them with their values in format: "{key} -> {value}"
// See the examples below.


function city(objCity) {
    for (let [key, value] of Object.entries(objCity)) {
        console.log(`${key} -> ${value}`);
    }
}
city({
name: "Plovdiv",
area: 389,
population: 1162358,
country: "Bulgaria",
postCode: "4000"
});
