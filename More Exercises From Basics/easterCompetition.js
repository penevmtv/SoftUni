function solve(arr) {
  let nBreadRolls = Number(arr[0]);
  let index = 1;
  let highestSumGrade = 0;
  let winerName = ` `;
  for(let currentBreadRoll = 1; currentBreadRoll <= nBreadRolls; currentBreadRoll++) {
    let bakerName = arr[index];
    index++;
    let sumGrade = 0;
    while(arr[index] !== `Stop`) {
      let grade = Number(arr[index]);
      sumGrade += grade;
      index++;
    }
    console.log(`${bakerName} has ${sumGrade} points. `);
    if(sumGrade >  highestSumGrade) {
      highestSumGrade = sumGrade;
      winerName = bakerName;
      console.log(`${bakerName} is the new number 1!`);
    }
    index++;
  }
  console.log(`${winerName} won competition with ${highestSumGrade} points! `);
}