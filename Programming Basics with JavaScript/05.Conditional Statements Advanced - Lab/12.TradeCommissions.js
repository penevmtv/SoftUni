function trade(city, sells) {
    let commission = 0;
    let isValid = true;
    isValid = sells < 0 ? false : true;

    switch (city) {
        case "Sofia":
            if (sells <= 500)
                commission = 0.05 * sells;
            else if (sells <= 1000)
                commission = 0.07 * sells;
            else if (sells <= 10000)
                commission = 0.08 * sells;
            else
                commission = 0.12 * sells;
         break;
        case "Varna":
            if (sells <= 500)
                commission = 0.045 * sells;
            else if (sells <= 1000)
                commission = 0.075 * sells;
            else if (sells <= 10000)
                commission = 0.1 * sells;
            else
                commission = 0.13 * sells;
         break;
        case "Plovdiv":
            if (sells <= 500)
                commission = 0.055 * sells;
            else if (sells <= 1000)
                commission = 0.08 * sells;
            else if (sells <= 10000)
                commission = 0.12 * sells;
            else
                commission = 0.145 * sells;
         break;
        default:
            isValid = false;
         break;  
    }

    if (isValid)
        console.log(commission.toFixed(2));
    else
        console.log("error");
        
        
}