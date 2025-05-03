function time15m(hour, minutes) {

    let allMinutes = hour * 60 + minutes + 15;
    let newHour = Math.floor(allMinutes / 60);
    let newMinutes = allMinutes % 60;

    if (newHour > 23)
        newHour -= 24;

    if (newMinutes <10)
        console.log(`${newHour}:0${newMinutes}`);
    else
        console.log(`${newHour}:${newMinutes}`);        
}