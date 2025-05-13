function solve(arr) {
  let nBadGrades = arr[0];
  let badGrades = 0;
  let sumGrades = 0;
  let nProblems = 0;
  let isNeedBreak = false;
  let index = 1;
  let problem = ``;
  while (arr[index] !== `Enough`) {
    problem = arr[index];
    nProblems++;
    let currentGrade = Number(arr[index + 1]);
    sumGrades += currentGrade;
    if (currentGrade <= 4) {
      badGrades++;
      if (badGrades == nBadGrades) {
        isNeedBreak = true;
        break;
      }
    }
    index += 2;
  }
  let averageGrade = sumGrades / nProblems;
  if (!isNeedBreak) {
    console.log(`Average score: ${averageGrade.toFixed(2)}`);
    console.log(`Number of problems: ${nProblems}`);
    console.log(`Last problem: ${problem}`);
  } else 
    console.log(`You need a break, ${nBadGrades} poor grades.`);
}