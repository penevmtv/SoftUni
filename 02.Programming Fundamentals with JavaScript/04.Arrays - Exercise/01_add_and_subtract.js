// Write a function, which changes the value of odd and even numbers in an array of numbers. 
// •	If the number is even - add to its value its index position
// •	If the number is odd - subtract to its value its index position
// Output
// On the first line print the newly modified array, on the second line print the sum of numbers from the original array,
//  on the third line print the sum of numbers from the modified array.




function solve(arr) {
    let newarray = [];
    let originArrSum = 0;
    let modArrSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        originArrSum += num;
        if (num % 2 == 0) {
            num += i;
        } else {
            num -= i;
        }
        newarray.push(num);
        modArrSum += num;
    }
    console.log(newarray);
    console.log(originArrSum);
    console.log(modArrSum);
}