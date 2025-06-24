// The National Revenue Agency hired you to create software, which will help them to calculate the vehicle taxes.
// You will be given a string representing vehicles that will be taxed. Each vehicle is separated by ">>", where the 
// first element is a string representing the car type, the second element is an integer representing the years the tax
//  should be paid, and the third element is an integer representing the kilometers traveled.
// There are three valid types of vehicles:
// •	"family" – the initial tax for a family car is 50 euros
// •	" heavyDuty" – the initial tax for a heavy-duty is 80 euros
// •	"sports" – the initial tax for a sports car is 100 euros
// If the car is not valid print "Invalid car type." and continue to the next vehicle. 
// When calculating tax keep in mind the following rules:
// •	For a family car, the tax declines by 5 euros for every year in use. Also, the tax increases by 12 euros for every 3000 km. traveled.
// •	For a heavyDuty car, the tax declines by 8 euros for every year in use. Also, the tax increases by 14 euros for every 9000 km. traveled.
// •	For a sports car, the tax declines by 9 euros for every year in use. Also, the tax increase by 18 euros for every 2000 km. Traveled.
// Input
// You receive a string representing the vehicles, separated with ">>": "vehicle1>>vehicle2>>vehicle3…".
// Output
// •	Upon every successful taxed car print: "A {car type} car will pay {total tax to pay} euros in taxes." Format the total tax to pay to 
// the second digit after the decimal point.

// •	On the last line, print how much the National Revenue Agency will collect:
//  "The National Revenue Agency will collect {total tax collected} euros in taxes." Formatted to the second digit after the decimal point.



function taxCalculator(arrOfstring) {
    let arrOfCars = arrOfstring[0].split(`>>`);
    let allAgencyTaxes = 0;
    

    for (let car of arrOfCars) {
        car = car.split(` `);
        let type = car.shift();
        let [yearsInUse, km] = car.map(Number);

        let taxesForCurrentCar = 0;

        let isValidCar = true;

        switch (type) {
            case `family`:
                taxesForCurrentCar = 50 - (5 * yearsInUse);
                taxesForCurrentCar += 12 * (Math.trunc(km / 3000));
                break;
            case `heavyDuty`:
                taxesForCurrentCar = 80 - (8 * yearsInUse);
                taxesForCurrentCar += 14 * (Math.trunc(km / 9000));
                break;
            case `sports`:
                taxesForCurrentCar = 100 - (9 * yearsInUse);
                taxesForCurrentCar += 18 * (Math.trunc(km / 2000));
                break;
            default :
                console.log(`Invalid car type.`);
                isValidCar = false;
                break;
        }
        
        if (isValidCar) {
            allAgencyTaxes += taxesForCurrentCar;
                console.log(`A ${type} car will pay ${taxesForCurrentCar.toFixed(2)} euros in taxes.`);
        }  
    }
    return `The National Revenue Agency will collect ${allAgencyTaxes.toFixed(2)} euros in taxes.`;
}
console.log(taxCalculator([ 'family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410' ]));