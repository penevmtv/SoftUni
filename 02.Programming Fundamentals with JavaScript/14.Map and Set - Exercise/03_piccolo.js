// Write a function that:
// •	Records a car number for every car that enters the parking lot
// •	Removes a car number when the car goes out
// •	Input will be an array of strings in format [direction, carNumber]
// Print the output with all car numbers which are in the parking lot sorted in ascending by number.
// If the parking lot is empty, print: "Parking Lot is Empty".




function piccolo(arrOfStr) {
    let carNumbersSet = new Set();

    for (let input of arrOfStr) {

        let [command, carNumber] = input.split(`, `);
        
        switch (command) {
            case `IN`:
                carNumbersSet.add(carNumber);
                break;
            case `OUT`:
                if (carNumbersSet.has(carNumber)) {
                    carNumbersSet.delete(carNumber);
                }
                break;
        }
    }
    
    if (carNumbersSet.size === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        let sortedArrOfCarNums = [...carNumbersSet].sort();
        
        for (let number of sortedArrOfCarNums) {
            console.log(number);
        }
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);
