// Write a function that composes an object by given properties. The input comes as an array of strings. 
// Every even index of the array represents the name of the food. 
// Every odd index is a number that is equal to the calories in 100 grams of the given product. 
// Assign each value to its corresponding property, and finally print the object.
// The input comes as an array of string elements.
// The output should be printed on the console.




function printCalorieObject(arrOfStrs) {
    const calorieObject = {};

    arrOfStrs.forEach((el, idx) => {
        if (idx % 2 !== 0) calorieObject[arrOfStrs[idx - 1]] = Number(el);
    });


    // for (let i = 0; i < arrOfStrs.length; i += 2) {
    //     const key = arrOfStrs[i];
    //     const value = Number(arrOfStrs[i + 1]);

    //     calorieObject[key] = value;
    // }
    
    console.log(calorieObject);
}
printCalorieObject([
    'Potato',
    '93',
    'Skyr',
    '63',
    'Cucumber',
    '18',
    'Milk',
    '42'
]);
