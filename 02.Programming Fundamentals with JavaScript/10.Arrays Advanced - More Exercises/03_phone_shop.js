// Kevin has a phone shop. He has to order new models, but his storage is so large that he doesn't know which phone models he has.
// Write a program that will help Kevin not to buy unnecessary phones. You will receive a list of phones separated by 
// ", " (comma and space). After that, until you receive "End", you will receive different commands, each on a new line. The commands are:
// •	"Add - {phone}":
// o	Add the given phone to the storage. 
// o	If the phone already exists, you should skip this line.
// •	"Remove - {phone}":
// o	Remove the phone from the storage if it exists.
// o	Otherwise, ignore the command.
// •	"Bonus phone - {oldPhone}:{newPhone}":
// o	If the old phone exists, add the new phone after the old one. 
// o	Otherwise, ignore the command.
// •	"Last - {phone}":
// o	If the given phone exists, you should change its position and put it last in your storage.
// o	Otherwise, ignore the command.
// Input
// •	On the first line - list of phones separated by ", " (comma and space)
// •	On the next lines - commands until you receive "End"
// Output
// •	After receiving the "End" command, print the phones in your storage, separated by ", " (comma and space).





function phoneShop(arrayOfStrings) {
    let copyArrOfStr = arrayOfStrings.slice();

    let arrOfPhones = copyArrOfStr.shift().split(`, `);

    let index = 0;
    while (copyArrOfStr[index] !== `End`) {
        let commandArr = copyArrOfStr[index].split(` - `);
        let command = commandArr.shift();

        if (command === `Add`) {
            let phone = commandArr.shift();
            if (!arrOfPhones.includes(phone)) {
                arrOfPhones.push(phone);
            }
        } else if (command === `Remove`) {
            let phone = commandArr.shift();
            if (arrOfPhones.includes(phone)) {
                let indexOfPhone = arrOfPhones.indexOf(phone);
                arrOfPhones.splice(indexOfPhone, 1);
            }
        } else if (command === `Bonus phone`) {
            let phoneArray = commandArr.shift().split(`:`);
            let [oldPhone, newPhone] = phoneArray;
            if (arrOfPhones.includes(oldPhone)) {
                let indexOfOldPhone = arrOfPhones.indexOf(oldPhone);
                arrOfPhones.splice(indexOfOldPhone + 1, 0, newPhone);
            }    
        } else if (command === `Last`) {
            let phone = commandArr.shift();
            if (arrOfPhones.includes(phone)) {
                let indexOfPhone = arrOfPhones.indexOf(phone);
                arrOfPhones.splice(indexOfPhone, 1);
                arrOfPhones.push(phone);
            }
        }
        index++;
    }
    return arrOfPhones.join(`, `);
}
console.log(phoneShop(["SamsungA50, MotorolaG5, IphoneSE",
"Add - Iphone10",
"Remove - IphoneSE",
"End"]));