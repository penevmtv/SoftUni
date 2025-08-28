// Write a function that stores the students that signed up for different courses at SoftUni. 
// For each course, you have to store the name, the capacity, and the students that are in it. 
// For each student store the username, the email, and their credits. The input will come as an array of strings. 
// The strings will be in some of the following formats:
// "{course name}: {capacity}" – add the course with that capacity. If the course exists, add the capacity to the existing one
// "{username}[{credits count}] with email {email} joins {course name}" – add the student if the course exists (each student can be in multiple courses)
//  and if there are places left (count of students are less than the capacity)
// Finally, you should sort the courses by the count of students in descending. Each course should have its students sorted by credits in descending.
// Output
// Print the result in the format:
// "{course one}: {places left} places left
// --- {credits}: {username one}, {email one}
// …"




function softUniStudents(arrOfStrs) {
    let coursesObj = {};

    for (const string of arrOfStrs) {
        if (string.includes(`: `)) {
            let [course, capacity] = string.split(`: `);
            capacity = Number(capacity);

            if (!coursesObj[course]) {
                coursesObj[course] = {capacityNum: capacity};
            } else {
                coursesObj[course].capacityNum += capacity;
            }
        } else if (string.includes(`@`)) {
            const [userName, rest] = string.split(`[`);  
            
            const credits = rest.split(`]`)[0];
                     
        }
    }
}
softUniStudents([
'JavaBasics: 2', 
'user1[25] with email user1@user.com joins C#Basics', 
'C#Advanced: 3', 
'JSCore: 4', 
'user2[30] with email user2@user.com joins C#Basics', 
'user13[50] with email user13@user.com joins JSCore', 
'user1[25] with email user1@user.com joins JSCore', 
'user8[18] with email user8@user.com joins C#Advanced', 
'user6[85] with email user6@user.com joins JSCore', 
'JSCore: 2', 
'user11[3] with email user11@user.com joins JavaBasics', 
'user45[105] with email user45@user.com joins JSCore', 
'user007[20] with email user007@user.com joins JSCore', 
'user700[29] with email user700@user.com joins JSCore', 
'user900[88] with email user900@user.com joins JSCore'
]);
