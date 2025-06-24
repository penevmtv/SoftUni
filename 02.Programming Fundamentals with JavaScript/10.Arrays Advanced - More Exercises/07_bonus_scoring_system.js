// Create a program that calculates bonus points for each student enrolled in a course. On the first line, you are going to receive the number of students.
//  On the second line, you will receive the total number of lectures in the course. The course has an additional bonus, which you will receive on the third line.
//   On the following lines, you will be receiving the count of attendances for each student.
// The bonus is calculated with the following formula:
// {total bonus} = {student attendances} / {course lectures} * (5 + {additional bonus})
// Find the student with the maximum bonus and print them, along with his attendance, in the following format:
// "Max Bonus: {max bonus points}."
// "The student has attended {student attendances} lectures."
// Round the bonus points at the end to the nearest larger number.
// Input / Constraints
// · The input is given as an array of strings.
// · The first element of the array represents the number of students – an integer in the range [0…50].
// · The second element represents the number of lectures – an integer in the range [0…50].
// · The third element represents the additional bonus – an integer in the range [0…100].
// · The remaining elements represent the number of lectures attended by each student.
// · There will never be students with equal bonuses.
// Output
// · Print the maximum bonus points and the attendance of the given student, rounded to the nearest larger number, scored by a student in this course in the
//  format described above. 




function bonusScoringSystem(arrOfStr) {
    let copyArrOfStr = arrOfStr.slice();
    
    let _ = Number(copyArrOfStr.shift());
    let numOfLectures = Number(copyArrOfStr.shift());
    let additBonus = Number(copyArrOfStr.shift());
    

    arrOfBonuses = copyArrOfStr.map(x => x / numOfLectures * (5 + additBonus));

    let maxBonus = 0;
    let maxBonusStudAttend = 0;

    for (let bonusIndex in arrOfBonuses) {
        if (arrOfBonuses[bonusIndex] > maxBonus) {
            maxBonus = arrOfBonuses[bonusIndex];
            maxBonusStudAttend = copyArrOfStr[bonusIndex];
        }
    }
    console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
    console.log(`The student has attended ${Math.round(maxBonusStudAttend)} lectures.`);
}
bonusScoringSystem(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);
