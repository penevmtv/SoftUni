function sumSeconds(firstP, secondP, thirdP) {

    let allSeconds = firstP + secondP + thirdP;
    let minutes = Math.floor(allSeconds / 60);
    let seconds = allSeconds % 60;

    if (seconds < 10)
        console.log(`${minutes}:0${seconds}`);
    else
        console.log(`${minutes}:${seconds}`);
}