function solve(days, hoursPerDay) {
    let price = 0;
    for (let currentDay = 1; currentDay <= days; currentDay++) {
        let priceForCurrentDay = 0;
        for (let currentHour = 1; currentHour <= hoursPerDay; currentHour++) {
            if (currentDay % 2 === 0 && currentHour % 2 !== 0) 
                priceForCurrentDay += 2.50;
            else if (currentDay % 2 !== 0 && currentHour % 2 === 0)
                priceForCurrentDay += 1.25;
            else
                priceForCurrentDay += 1;
        }
        console.log(`Day: ${currentDay} - ${priceForCurrentDay.toFixed(2)} leva`);
        price += priceForCurrentDay;     
    }
    console.log(`Total: ${price.toFixed(2)} leva`);
}