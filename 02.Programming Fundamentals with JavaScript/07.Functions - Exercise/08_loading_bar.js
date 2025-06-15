// You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...). 
// Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.


function loadingBar(number) {

    function visualBar(num) {
        let visualArray = [];
        for (let i = 1; i <= 10; i++) {
            if (i <= num / 10) {
                visualArray.push(`%`);
            } else {
                visualArray.push(`.`);
            }
        }
        return visualArray.join(``);
    }

    if (number < 100) {
        console.log(`${number}% [${visualBar(number)}]`);
        console.log(`Still loading...`);
    } else {
        console.log(`100% Complete!`);
        console.log(`[${visualBar(number)}]`);
    }
}
