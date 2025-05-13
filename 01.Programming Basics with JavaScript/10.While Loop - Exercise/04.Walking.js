function solve(arr) {
    let allSteps = 0;
    let index = 0;
    let isGoingHome = false;
    while (allSteps < 10000) {
        if (arr[index] !== `Going home`) {
            let currentSteps = Number(arr[index]);
            allSteps += currentSteps;
        } else {
            let stepsToHome = Number(arr[index + 1]);
            allSteps += stepsToHome;
            isGoingHome = true;
            break;
        }
        index++;
    }
    if (isGoingHome && allSteps < 10000) {
        console.log(`${10000 - allSteps} more steps to reach goal.`);
    } else if (isGoingHome && allSteps >= 10000 || !isGoingHome) { 
        console.log(`Goal reached! Good job!`);
        console.log(`${allSteps - 10000} steps over the goal!`);
    }    
}
