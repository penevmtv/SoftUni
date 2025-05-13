function solve(flower, count, budget) {
  let price = 0;

  switch (flower) {
    case "Roses":
      price = 5 * count;
      if (count > 80)
        price *= 0.9;
      break;
    case "Dahlias":
      price = 3.8 * count;
      if (count > 90)
        price *= 0.85;
      break;
    case "Tulips":
      price = 2.8 * count;
      if (count > 80)
        price *= 0.85;
      break;
    case "Narcissus":
      price = 3 * count;
      if (count < 120)
        price *= 1.15;
      break;
    case "Gladiolus":
      price = 2.5 * count;
      if (count < 80)
        price *= 1.2;
      break;
  }
  let diff = Math.abs(price - budget);
  if (budget >= price)
    console.log(`Hey, you have a great garden with ${count} ${flower} and ${diff.toFixed(2)} leva left.`);
  else
    console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
}