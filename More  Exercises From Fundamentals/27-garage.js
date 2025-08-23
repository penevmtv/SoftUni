// Write a function that stores cars in garages. You will be given an array of strings. Each string will contain a number of a garage and info about a car. 
// You have to store the car (with its info) in the given garage. The info about the car will be in the format:
//  "{key1}: {value1}, {key2}: {value2}…"
// If the garage does not exist, create it. The cars will always be unique. At the end print the result in the format:
// "Garage № {number}:
// --- {carOneKeyOne} - {carOneValueOne}, {carOneKeyTwo} - {carOneValueTwo}…
// --- {the same for the next car}
// Garage № {number}: …"




function garage(arrOfStrs) {
    let garageObj = {};
    
    for (const element of arrOfStrs) {
        const [num, ...restStr] = element.split(` - `);
        if (!garageObj.hasOwnProperty(num)) {
            garageObj[num] = [];
        }
        
        let carObj = {};
        for (const pairs of restStr[0].split(`, `)) {
            const [key, value] = pairs.split(`: `);
            
            carObj[key] = value;           
        }
        
        garageObj[num].push(carObj);
    }

    for (const [num, cars] of Object.entries(garageObj)) {
        console.log(`Garage № ${num}`);
        
        for (const obj of cars) {
            let resultArr = [];
            for (const [key, value] of Object.entries(obj)) {
                resultArr.push(`${key} - ${value}`)
            }
            console.log(`--- ${resultArr.join(`, `)}`);
        }
    }
}
garage([
    '1 - color: blue, fuel type: diesel', 
    '1 - color: red, manufacture: Audi', 
    '2 - fuel type: petrol', 
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);
