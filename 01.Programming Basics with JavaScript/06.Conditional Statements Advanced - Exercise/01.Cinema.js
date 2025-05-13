function solve(typeProj, c, r) {
    let allSeats = c * r;
    let price = 0;
    
    switch (typeProj) {
      case "Premiere":
        price = 12;
        break;
      case "Normal":
        price = 7.5;
        break;
      case "Discount":
        price = 5;
        break;
    }
    console.log((price * allSeats).toFixed(2));
}