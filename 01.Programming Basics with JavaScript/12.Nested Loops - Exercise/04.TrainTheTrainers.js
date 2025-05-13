function solve(arr) {
    let nJury = Number(arr[0]);
    let presentationsCount = 0;
    let allPresAvGradeSum = 0;
    let index = 1;
    while (arr[index] !== `Finish`) {
        let namePresentation = arr[index];
        presentationsCount++;
        let gradeSum = 0;
        index++;
        for (let currentJury = 1; currentJury <= nJury; currentJury++) {
            let currentGrade = Number(arr[index]);
            gradeSum += currentGrade;
            index++;
        }
        let averageGrade = gradeSum / nJury;
        allPresAvGradeSum += averageGrade;
        console.log(`${namePresentation} - ${averageGrade.toFixed(2)}.`);      
    }
    let averageAll = allPresAvGradeSum / presentationsCount;
    console.log(`Student's final assessment is ${averageAll.toFixed(2)}.`);   
}