// You are given two integers n and k. Write a function that generates and prints the following sequence:
// •	The first element is 1.
// •	Every following element equals the sum of the previous k elements.
// •	The length of the sequence is n elements.
	
// The input comes as two number arguments. The first element represents the number n, and the second – the number k.
// The output is printed on the console on a single line, separated by space.


function lastKNumbersSequence(lengthOfTheSequence, nPreviousElements) {
    let result = [1];

    for (let i = 1; i < lengthOfTheSequence; i++) {
        let startIndex = Math.max(i - nPreviousElements, 0);
        let previousNumArr = result.slice(startIndex, i);
        let sum = 0;

        for (let num of previousNumArr) {
            sum += num;
        }
        result.push(sum);
    }
    return result.join(` `);
}
console.log(lastKNumbersSequence(8, 2));
