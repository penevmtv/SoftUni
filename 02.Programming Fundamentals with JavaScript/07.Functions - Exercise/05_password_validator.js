// Write a function that checks if a given password is valid. Password validations are:
// •	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// •	It should have at least 2 digits 
// If a password is a valid print: "Password is valid".
// If it is NOT valid, for every unfulfilled rule print a message:
// •	"Password must be between 6 and 10 characters"
// •	"Password must consist only of letters and digits"
// •	"Password must have at least 2 digits"


function passwordValidator(input) {

    function lengthCheck(input) {
        return (input.length >= 6 && input.length <= 10)
    } 

    function lettersAndDigitsCheck(input) {
        let array = input.split(``);

        for (let element of array) {
            if (element.charCodeAt() >= 65 && element.charCodeAt() <= 90 ||
            element.charCodeAt() >= 97 && element.charCodeAt() <= 122 ||
            element.charCodeAt() >= 48 && element.charCodeAt() <= 57) {
            }
            else {
                return false;
            }
        }
        return true;
    }


    function atLeast2DigitsCheck(input) {
        let array = input.split(``);
        let digitsCounter = 0;

        for (let element of array) {
            if (element.charCodeAt() >= 48 && element.charCodeAt() <= 57) {
                digitsCounter++;
                if (digitsCounter > 1) {return true;}
            } 
        }
        return false;
    }

    let isValid = true;

    if (!lengthCheck(input)) {
        console.log(`Password must be between 6 and 10 characters`);
        isValid = false;
    }

    if (!lettersAndDigitsCheck(input)) {
        console.log(`Password must consist only of letters and digits`);
        isValid = false;
    }

    if (!atLeast2DigitsCheck(input)) {
        console.log(`Password must have at least 2 digits`);
        isValid = false;
    }

    if (isValid) {console.log(`Password is valid`);}

}




// With Regex :

function passwordValidator(input) {

    function lengthCheck(input) {
        if (input.length >= 6 && input.length <= 10) {
            return true;
        } else {
            console.log(`Password must be between 6 and 10 characters`);
            return false;
        }
    }

    function lettersAndDigitsCheck(input) {
        let pattern = /^[A-Za-z0-9]+$/;
        if (pattern.test(input)) {
            return true;
        } else {
            console.log(`Password must consist only of letters and digits`);
            return false;
        }
    }

    function atLeast2DigitsCheck(input) {

        const digitCount = (input.match(/[0-9]/g) || []).length;

        if (digitCount >= 2) {
            return true;
        } else {
            console.log(`Password must have at least 2 digits`);
            return false;
        }
    }

    let isValidLength = lengthCheck(input);
    let isAlphanumeric = lettersAndDigitsCheck(input);
    let hasMin2Digits = atLeast2DigitsCheck(input);

    if (isValidLength && isAlphanumeric && hasMin2Digits) {
        console.log(`Password is valid`);
    }
}






