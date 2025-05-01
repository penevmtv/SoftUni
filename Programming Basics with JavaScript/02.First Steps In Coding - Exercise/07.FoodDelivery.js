function restaurant(chicken, fish, veg) {
    let chickenPrice = chicken * 10.35;
    let fishPrice = fish * 12.40;
    let vegPrice = veg * 8.15;
    
    let sumMenu = chickenPrice + fishPrice + vegPrice;
    let dessert = sumMenu * 0.2;
    
    allSum = 2.5 + sumMenu + dessert;
    console.log(allSum);
  }