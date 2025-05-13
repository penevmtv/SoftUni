function areaOfFigures(text ,arg1 ,arg2) {
    let result = 0;
    if (text === "square") {
         result = Math.pow(arg1,2);
    } else if (text === "rectangle") {
         result = arg1 * arg2;
    } else if (text === "circle") {
         result = Math.PI * Math.pow(arg1,2);
    } else if (text === "triangle") {
         result = arg1 * arg2 / 2;
    }
    console.log(result.toFixed(3));
}