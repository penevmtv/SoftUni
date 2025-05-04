function solve(degrees, time) {
  let outfit = " ";
  let shues = " ";

  switch (time) {
    case "Morning":
      if (degrees < 19) {
        outfit = "Sweatshirt";
        shues = "Sneakers";
      } else if (degrees < 25) {
        outfit = "Shirt";
        shues = "Moccasins";
      } else if (degrees > 24) {
        outfit = "T-Shirt";
        shues = "Sandals";
      }
      break;
    case "Afternoon":
      if (degrees < 19) {
        outfit = "Shirt";
        shues = "Moccasins";
      } else if (degrees < 25) {
        outfit = "T-Shirt";
        shues = "Sandals";
      } else if (degrees > 24) {
        outfit = "Swim Suit";
        shues = "Barefoot";
      }
      break;
    case "Evening":
      outfit = "Shirt";
      shues = "Moccasins";
      break;
  }

  console.log(`It's ${degrees} degrees, get your ${outfit} and ${shues}.`);
}