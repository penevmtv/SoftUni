//A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. Write a function,
// which receives an array of positive integers and checks if each integer is a palindrome or not.


function palindromeIntegers(arrayOfIntegers) {

    function isPalindrome(integer) {
        let arrNum = String(integer).split(``).map(Number);

        for (let i = 0; i < (arrNum.length - 1) / 2; i++) {
            if (arrNum[i] !== arrNum[arrNum.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
    
    for (let currentInteger of arrayOfIntegers) {
        console.log(isPalindrome(currentInteger));
    }
}
palindromeIntegers([123,323,421,121]);
