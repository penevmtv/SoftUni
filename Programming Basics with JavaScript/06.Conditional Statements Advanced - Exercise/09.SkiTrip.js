function trip(days, type, rate) {
    let priceForNight = 0;

    switch (type) {
        case `room for one person`:
            priceForNight = 18;
            break;
        case `apartment`:
            if (days < 10) 
                priceForNight = 25 * 0.7;
            else if (days < 15)
                priceForNight = 25 * 0.65;
            else
                priceForNight = 25 * 0.5;
            break;
        case `president apartment`:
            if (days < 10) 
                priceForNight = 35 * 0.9;
            else if (days < 15)
                priceForNight = 35 * 0.85;
            else
                priceForNight = 35 * 0.8;
            break;
    }
    if (rate === `positive`)
        console.log((priceForNight * (days - 1) * 1.25).toFixed(2));
    else if (rate === `negative`)
        console.log((priceForNight * (days - 1) * 0.9).toFixed(2));
}