// You will receive an array with arrays.
// The first array (at index 0) will hold all flights on a specific sector in the airport. The second array (at index 1)
//  will contain newly changed statuses of some of the flights at this airport. The third array (at index 2) will have a
//  single string, which will be the flight status you need to check. When you put all flights into an object and change
//  the statuses depends on the new information on the second array. You must print all flights with the given status from the last array.
// •	If the value of the string obtained from the third array is "Ready to fly":
// o	then you must print flights that have not changed their status in the second array 
// o	and automatically change the status to "Ready to fly"
// •	Otherwise, print only flights that have changed their status.




class Flights {
    constructor(code, destination, status) {
        this.code = code;
        this.Destination = destination;
        this.Status = status;
    }
} 

function flightSchedule(input) {
    let arrayOfObj = [];

    const [allFlightsArr, changedFlightArr, statusToCheckArr] = input;
    const statusToCheck = statusToCheckArr[0];

    for (const flight of allFlightsArr) {
        const [code, ...restDestination] = flight.split(` `);
        const destination = restDestination.join(` `);
        
        const flightObj = new Flights(code, destination, `Ready to fly`);

        arrayOfObj.push(flightObj);
    }

    for (const changedFlight of changedFlightArr) {
        const [code, status] = changedFlight.split(` `);

        for (const obj of arrayOfObj) {
            if (obj.code === code) {
                obj.Status = status;
            }
        }
    }

    arrayOfObj.forEach(obj => {
        if (obj.Status === statusToCheck) console.log(obj);
    })
}
flightSchedule([[
    'WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
	'WN612 Cancelled',
	'WN1173 Cancelled',
	'SK430 Cancelled'],
	['Cancelled']
]);
