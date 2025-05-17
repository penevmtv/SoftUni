function solve(nPeople, typeOfGroup, dayOfTheWeek) {
    let priceForPerson = 0;
    switch (typeOfGroup) {
        case `Students`:
            switch (dayOfTheWeek) {
                case `Friday`:
                    priceForPerson = 8.45;
                    break;
                case `Saturday`:
                    priceForPerson = 9.80;
                    break;
                case `Sunday`:
                    priceForPerson = 10.46;
                    break;
            }
            break;
        case `Business`:
            switch (dayOfTheWeek) {
                case `Friday`:
                    priceForPerson = 10.90;
                    break;
                case `Saturday`:
                    priceForPerson = 15.60;
                    break;
                case `Sunday`:
                    priceForPerson = 16;
                    break;
            }
            break;
        case `Regular`:
            switch (dayOfTheWeek) {
                case `Friday`:
                    priceForPerson = 15;
                    break;
                case `Saturday`:
                    priceForPerson = 20;
                    break;
                case `Sunday`:
                    priceForPerson = 22.50;
                    break;
            }
            break;
    }
    let totalPrice = priceForPerson * nPeople;
    if (typeOfGroup === `Students` && nPeople >= 30)
        totalPrice *= 0.85;
    else if (typeOfGroup === `Business` && nPeople >= 100)
        totalPrice = priceForPerson * (nPeople - 10);
    else if (typeOfGroup === `Regular` && nPeople >= 10 && nPeople <= 20)
        totalPrice *= 0.95;
    console.log(`Total price: ${totalPrice.toFixed(2)}`); 
}