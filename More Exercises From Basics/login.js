function solve(arr) {
    let username = arr[0];
    let reversUsername = ``;

    // reversUsername = username.split(``).reverse().join(``);

    for (let currentIndex = username.length - 1; currentIndex >= 0; currentIndex--) {
        reversUsername += username[currentIndex];
    }
    let index = 1;
    for (let currentTry = 1; currentTry < arr.length; currentTry++) {
        if (arr[index] !== reversUsername) {
            if (currentTry === 4) {
                console.log(`User ${username} blocked!`);
            } else
            console.log(`Incorrect password. Try again.`);
        } else {
            console.log(`User ${username} logged in.`);
            break;
        }
        index++;
    }
}