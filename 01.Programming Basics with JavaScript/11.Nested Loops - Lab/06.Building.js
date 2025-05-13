function solve(nFloors, nRooms) {
  for (let i = nFloors; i > 0; i--) {
    let result = ` `;
    for (let j = 0; j < nRooms; j++) {
      if (i === nFloors) {
        result += `L${i}${j} `;
      } else if (i % 2 === 0) {
        result += `O${i}${j} `;
      } else {
        result += `A${i}${j} `;
      }
    }
    console.log(result);
  }
}