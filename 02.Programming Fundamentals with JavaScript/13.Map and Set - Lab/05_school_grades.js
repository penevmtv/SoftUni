// Write a function that stores students and their grades throughout the year. If a student appears more than once, 
// add the new grades to existing ones. Finally, print the students and their average grades, sorted alphabetically by 
// student name. The input comes as an array of strings.
// Note: The average grades must be fixed to the second decimal place.




function schoolGrades(arrOfStr) {
    let gradesMap = new Map();

    for (let element of arrOfStr) {
        let [name, ...strGrades] = element.split(` `);
        let numGrades = strGrades.map(Number);

        if (gradesMap.has(name)) {
            let gradesArr = gradesMap.get(name);

            //gradesArr = gradesArr.concat(numGrades);

            for (let grade of numGrades) {
                gradesArr.push(grade);
            }
            gradesMap.set(name, gradesArr);
        } else {
            gradesMap.set(name, numGrades);
        }
    }

    for (let [name, gradesArr] of gradesMap) {

        
        let sumGrades = 0;

        for (let grade of gradesArr) {

            sumGrades += grade;
        }
        let averageGrade = (sumGrades / gradesArr.length).toFixed(2);

        gradesMap.set(name, averageGrade);
    }

    let sortedArr = [...gradesMap.keys()].sort((a, b) => a.localeCompare(b));

    for (let name of sortedArr) {
        console.log(`${name}: ${gradesMap.get(name)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
);
