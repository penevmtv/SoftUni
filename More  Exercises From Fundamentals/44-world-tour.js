// You are a world traveler, and your next goal is to make a world tour. To do that, you have to plan out everything first. 
// To start with, you would like to plan out all of your stops where you will have a break.
// On the first line, you will be given a string containing all of your stops. Until you receive the command "Travel",
//  you will be given some commands to manipulate that initial string. The commands can be:
// •	"Add Stop:{index}:{string}":
// o	Insert the given string at that index only if the index is valid.
// •	"Remove Stop:{start_index}:{end_index}":
// o	Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid.
// •	"Switch:{old_string}:{new_string}":
// o	If the old string is in the initial string, replace it with the new one (all occurrences).
// Note: After each command, print the current state of the string!
// After the "Travel" command, print the following: "Ready for world tour! Planned stops: {string}".
// Input / Constraints
// •	JavaScript: you will receive a list of strings.
// •	An index is valid if it is between the first and the last element index (inclusive) (0 ….. Nth) in the sequence.
// Output
// •	Print the proper output messages in the proper cases as described in the problem description.




function worldTour(arrOfStrs) {

    const isValidIdx = (i, string) => i >= 0 && i < string.length;

    let stops = arrOfStrs[0];

    let index = 1;
    while (arrOfStrs[index] !== `Travel`&& index < arrOfStrs.length) {
        const [command, ...infoArr] = arrOfStrs[index].split(`:`);

        if (command === `Add Stop`) {
            const [idx, string] = infoArr;
            if (isValidIdx(idx, stops)) {
                stops = stops.slice(0, idx) + string + stops.slice(idx);
            }
        } else if (command === `Remove Stop`) {
            if (infoArr.every(i => isValidIdx(Number(i), stops))) {
                const [startIdx, endIdx] = infoArr.map(Number);

                stops = stops.slice(0, startIdx) + stops.slice(endIdx + 1);
            }
        } else if (command === `Switch`) {
            const [oldString, newString] = infoArr;
            if (stops.includes(oldString)) {
                stops = stops.replaceAll(oldString, newString);
            }
        }
        console.log(stops);
        index++;
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);
