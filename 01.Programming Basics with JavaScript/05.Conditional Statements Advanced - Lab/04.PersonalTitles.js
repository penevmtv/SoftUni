function solve(age, gender) {
  switch (age < 16) {
    case true:
      switch (gender) {
        case "m":
          console.log("Master");
          break;
        case "f":
          console.log("Miss");
          break;
      }
      break;
    default:
      switch (gender) {
        case "m":
          console.log("Mr.");
          break;
        case "f":
          console.log("Ms.");
          break;
      }
      break;
  }
}