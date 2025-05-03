function solve(budget, season) {
    let spendSum = 0;
    let destination = " ";
    
    if (budget <= 100) {
      destination = "Bulgaria";
        if (season === "summer")
       spendSum = 0.3 * budget;
        else 
        spendSum = 0.7 * budget;
    } else if (budget <= 1000) {
       destination = "Balkans";
       spendSum = season === "summer" ? budget * 0.4 : budget * 0.8;
    } else { 
      destination = "Europe";
      spendSum = 0.9 * budget;
    }
     
     let place = season === "summer" && destination != "Europe" ? "Camp" : "Hotel";
     
      console.log(`Somewhere in ${destination}`);
      console.log(`${place} - ${spendSum.toFixed(2)}`);
  }