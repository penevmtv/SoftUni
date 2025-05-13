function lunchBreak(name, episodeDuration, breakDuration) {
    let lunchTime = breakDuration / 8;
    let relaxTime = breakDuration / 4;
    let freeTime = breakDuration - lunchTime - relaxTime;

    let diff = Math.abs(freeTime - episodeDuration);

    if (freeTime >= episodeDuration) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(diff)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(diff)} more minutes.`);
    }

}