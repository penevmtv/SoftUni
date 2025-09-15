// Write a program that receives a total of 4 parameters in the format x1, y1, x2, y2. 
// Check if the distance between each point (x, y) and the beginning of the Cartesian coordinate system (0, 0) is valid. 
// A distance between two points is considered valid if it is an integer value. 
// Note: You can use the following formula to help you calculate the distance between the points (x1, y1) and (x2, y2).
// The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}. 
// In case a distance is valid, print: `{x1, y1} to {x2, y2} is valid`
// If the distance is invalid, print: `{x1, y1} to {x2, y2} is invalid`
// The input consists of two points given as 4 numbers.
// For each comparison print either `{x1, y1} to {x2, y2} is valid` if the distance is valid, or `{x1, y1} to {x2, y2} is invalid` if it is invalid.




function findDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

const isValid = dist => dist % 1 === 0;

function validityChecker(inputArr) {
    const [x1, y1, x2, y2] = inputArr;

    const distPoint1To0 = findDistance(x1, y1, 0, 0);
    const distPoint2To0 = findDistance(x2, y2, 0, 0);
    const distPoint1ToPoint2 = findDistance(x1, y1, x2, y2);

    if (isValid(distPoint1To0)) console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
    else console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);

    if (isValid(distPoint2To0)) console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
    else console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);

    if (isValid(distPoint1ToPoint2)) console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    else console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}
validityChecker([3, 0, 0, 4]);
