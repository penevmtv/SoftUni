function solve(budged, season, fishers) {
  let price = 0;

  switch (season) {
    case "Spring":
      price = 3000;
      if (fishers <= 6)
        price *= 0.9;
      else if (fishers <= 11)
        price *= 0.85;
      else
        price *= 0.75;
      break;
    case "Summer":
    case "Autumn":
      price = 4200;
      if (fishers <= 6)
        price *= 0.9;
      else if (fishers <= 11)
        price *= 0.85;
      else
        price *= 0.75;
      break;
    case "Winter":
      price = 2600;
      if (fishers <= 6)
        price *= 0.9;
      else if (fishers <= 11)
        price *= 0.85;
      else
        price *= 0.75;
      break;
  }
  price = fishers % 2 === 0 && season != "Autumn" ? price * 0.95 : price;
  let diff = Math.abs(price - budged);
  if (budged >= price)
    console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
  else
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
}