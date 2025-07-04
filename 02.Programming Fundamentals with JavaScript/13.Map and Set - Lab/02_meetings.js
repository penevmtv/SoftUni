// Write a function that manages meeting appointments. The input comes as an array of strings. 
// Each string contains a weekday and person’s name. For each successful meeting, print a message. 
// If you receive the same weekday twice, the meeting cannot be scheduled so print a conflicting message. 
// In the end, print a list of all successful meetings. 




function meetings(arrOfMeetings) {
    let meetingsMap = new Map();
    for (let meeting of arrOfMeetings) {
        let [weekday, name] = meeting.split(` `);
        if (!meetingsMap.has(weekday)) {
            meetingsMap.set(weekday, name);
            console.log(`Scheduled for ${weekday}`);
        } else {
            console.log(`Conflict on ${weekday}!`);
        }
    }

    for (let [weekday, name] of meetingsMap) {
        console.log(`${weekday} -> ${name}`);
    }
}
meetings(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim']
);