// Write a program to read a sequence of integers and find and print the top 5 numbers greater than the average value in the sequence, sorted in descending order.
// Input
// •	Read from the console a single line holding space-separated integers.
// Output
// •	Print the above-described numbers on a single line, space-separated. 
// •	If less than 5 numbers hold the property mentioned above, print less than 5 numbers. 
// •	Print "No" if no numbers hold the above property.
// Constraints
// •	All input numbers are integers in the range [-1 000 000 … 1 000 000]. 
// •	The count of numbers is in the range [1…10 000].




function numbers(string) {
    const numbersArr = string.split(` `).map(Number);
    
    const numbersSum = numbersArr.reduce((sum, num) => sum += num, 0);
    const averageValue = numbersSum / numbersArr.length;
    
    const topNums = numbersArr.filter(num => num > averageValue).sort((a, b) => b - a);

    if (topNums.length > 0 && topNums.length < 5) {
        console.log(topNums.join(` `));
    } else if (topNums.length > 4) {
        console.log(topNums.slice(0, 5).join(` `));
    } else {
        console.log(`No`);
    }
}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
