// In this problem, you have to arrange all students by grade. You as the secretary of the school principal will process students and
//  store them into a school register before the new school year hits. As a draft, you have a list of all the students from last year but mixed. 
// Keep in mind that if a student has a lower score than 3, he does not go into the next class. As a result of your work, you have to print the
//  entire school register sorted in ascending order by grade already filled with all the students from last year in the format:
// `{nextGrade} Grade
// List of students: {All students in that grade}
// Average annual score from last year: {average annual score on the entire class from last year}`
// And empty row {console.log}
// The input will be an array with strings, each containing a student's name, last year's grade, and an annual score. 
// The average annual score from last year should be formatted to the second decimal point.




function schoolRegister(inputArr) {

    class Student {
        constructor(name, averageScore) {
            this.names = [name];
            this.averageScores = [averageScore];
        }
    }

    let studentsObj = {};
    
    for (const student of inputArr) {
        let [nameArr, gradeArr, averageScoreArr] = student.split(`, `);
        const name = nameArr.split(`: `).pop();
        const grade = Number(gradeArr.split(`: `).pop());
        const averageScore = Number(averageScoreArr.split(`: `).pop());

        
        if (averageScore >= 3) {
            if (!studentsObj.hasOwnProperty([grade])) { 
                studentsObj[grade] = new Student(name, averageScore);               
            } else {
                studentsObj[grade].names.push(name);
                studentsObj[grade].averageScores.push(averageScore);
            }       
        }
    }

    let sortedGradesArr = Object.keys(studentsObj).sort((keyA, keyB) => keyA - keyB);

    for (const grade of sortedGradesArr) {
        const nextGrade = Number(grade) + 1;
        const names = studentsObj[grade].names.join(`, `);
        const scoreSum = studentsObj[grade].averageScores.reduce((sum, score) => sum += score, 0);
        const averageScore = scoreSum / studentsObj[grade].averageScores.length;

        console.log(`${nextGrade} Grade`);
        console.log(`List of students: ${names}`);
        console.log(`Average annual score from last year: ${averageScore.toFixed(2)}`);
        console.log(``);
    } 
}
schoolRegister([
"Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
"Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
"Student name: George, Grade: 8, Graduated with an average score: 2.83",
"Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
"Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
"Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
"Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
"Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
"Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
"Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
"Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
"Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);
