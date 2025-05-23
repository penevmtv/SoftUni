function solve(x1, y1, x2, y2) {
  let xDistance = Math.abs(x1 - x2);
  let yDistance = Math.abs(y1 - y2);
  let xYDistance = Math.sqrt(xDistance ** 2 + yDistance ** 2);
  console.log(xYDistance);
} 