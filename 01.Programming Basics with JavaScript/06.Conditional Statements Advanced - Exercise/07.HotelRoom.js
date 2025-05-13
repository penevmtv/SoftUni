function solve(month, nNights) {
    let studioPricePerNight = 0;
    let apartmentPricePerNight = 0;

    switch (month) {
        case `May`:
        case `October`:
            studioPricePerNight = 50;
            apartmentPricePerNight = 65;

            if (nNights > 7 && nNights <= 14)
                studioPricePerNight *= 0.95;
            else if (nNights > 14)
                studioPricePerNight *= 0.7;
            break;
        case `June`:
        case `September`:
            studioPricePerNight = 75.20;
            apartmentPricePerNight = 68.70;

            if (nNights > 14)
                studioPricePerNight *= 0.8;
            break;
        case `July`:
        case `August`:
            studioPricePerNight = 76;
            apartmentPricePerNight = 77;
            break;
    }
    if (nNights > 14)
        apartmentPricePerNight *= 0.9;

    console.log(`Apartment: ${(apartmentPricePerNight * nNights).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioPricePerNight * nNights).toFixed(2)} lv.`);
    
}
