function solve(arr) {
  let index = 0;
  let allMatchesCounter = 0;
  let allWins = 0;
  while(arr[index] !== `End of tournaments`) {
    let nameOfTournament = arr[index];
    let nMatches = Number(arr[index + 1]);
    index += 2;
    for(let currentMatch = 1; currentMatch <= nMatches; currentMatch++) {
      allMatchesCounter++;
      let myPoints = Number(arr[index]);
      index++;
      let otherPoints = Number(arr[index]);
      let diff = Math.abs(myPoints - otherPoints);
      if(myPoints > otherPoints) {
        allWins++;
        console.log(`Game ${currentMatch} of tournament ${nameOfTournament}: win with ${diff} points.`);
      } else {
        console.log(`Game ${currentMatch} of tournament ${nameOfTournament}: lost with ${diff} points.`);
      }
      index++;
    }
  }
  let percentWins = (allWins / allMatchesCounter) * 100;
  let percentLosses = 100 - percentWins;
  console.log(`${percentWins.toFixed(2)}% matches win`);
  console.log(`${percentLosses.toFixed(2)}% matches lost`);
}