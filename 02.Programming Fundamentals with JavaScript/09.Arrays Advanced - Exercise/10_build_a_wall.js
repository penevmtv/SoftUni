// Write a program that keeps track of the construction of a 30-foot wall. You will be given an array of strings that must be parsed as numbers, 
// representing the initial height of mile-long sections of the wall, in feet. Each section has its construction crew that can add 1 foot of height
//  per day by using 195 cubic yards of concrete. All crews work simultaneously (see examples), meaning all sections that aren't completed 
//  (are less than 30 feet high) grow by 1 foot every day. When a section of the wall is complete, its crew is relieved. 
// Your program needs to keep track of how much concrete is used daily until the completion of the entire wall. In the end, print on a single line,
//  separated by comma and space, the amount of concrete used each day, and on a second line, the final cost of the wall. One cubic yard of concrete costs 1900 pesos. 
// Input 
// Your program will receive an array of strings representing numbers as a parameter. 
// Output 
// Print on the console on one line the amount of concrete used each day separated by comma and space, and on a second line, the final cost of the wall. 
// Constraints 
// •	The wall may contain up to 2000 sections (2000 elements in the initial array).
// •	Starting height for each section is within the range [0…30].



function buildAWall(arrOfStrings) {
    let wallHeightInFoots = 30;
    let concretePerDayForCrew = 195;
    let priceForOneCubConcrete = 1900;
    let arrOfCrews = arrOfStrings.map(Number);
    let arrOfUsedConcrete = [];
    let allAmountOfConcrete = 0;

    arrOfCrews.sort((a, b) => a - b);

    let allDaysOfWork = wallHeightInFoots - arrOfCrews[0];

    for (let day = 1; day <= allDaysOfWork; day++) {
        arrOfCrews = arrOfCrews.filter(x => x < 30);
        let allCrewConcretePerDay = arrOfCrews.length * concretePerDayForCrew;
        allAmountOfConcrete += allCrewConcretePerDay;
        arrOfUsedConcrete.push(allCrewConcretePerDay);
        arrOfCrews = arrOfCrews.map(x => x + 1);
    }

    let finalCost = allAmountOfConcrete * priceForOneCubConcrete;

    let result = `${arrOfUsedConcrete.join(`, `)}\n${finalCost} pesos`;
    return result;
}
console.log(buildAWall([17, 22, 17, 19, 17]));