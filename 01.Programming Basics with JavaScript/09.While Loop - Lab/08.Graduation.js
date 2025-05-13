function solve(arr) {
    let ratingSum = 0;
    let currentGrade = 1;
    let badRating = 0;
    let name = arr[0];
    let index = 1;
    let isOut = false;
    while (currentGrade <= 12) {
        let rating = Number(arr[index]);
        if (rating >= 4) {
            currentGrade++;
        } else {
            badRating++;
            if (badRating > 1) {
                isOut = true;
                break;
            }
        }
        ratingSum += rating;
        index++;
    }
    let averageRating = ratingSum / 12;
    if (isOut) {
        console.log(`${name} has been excluded at ${currentGrade} grade`);
    } else
        console.log(`${name} graduated. Average grade: ${averageRating.toFixed(2)}`)
}