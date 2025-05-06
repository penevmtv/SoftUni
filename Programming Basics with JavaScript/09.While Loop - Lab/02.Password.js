function solve(arr) {
    let name = arr[0];
    let password = arr[1];
    let index = 2;
    while (arr[index] !== password) {
        index++;
    }
    console.log(`Welcome ${name}!`);  
}