// Write a function to extract all email addresses from a given text. The text comes at the only input line. 
// Print the emails on the console, each at a separate line. Emails are considered to be in format <user>@<host>, where: 
// •	<user> is a sequence of letters and digits, where '.', '-' and '_' can appear between them.
// o	Examples of valid users: "stephan", "mike03", "s.johnson", "st_steward", "softuni-bulgaria", "12345".
// o	Examples of invalid users: ''--123", ".....", "nakov_-", "_steve", ".info". 
// •	<host> is a sequence of at least two words, separated by dots '.'. Each word is a sequence of letters and can have hyphens
//  '-' between the letters.
// o	Examples of hosts: "softuni.bg", "software-university.com", "intoprogramming.info", "mail.softuni.org". 
// o	Examples of invalid hosts: "helloworld", ".unknown.soft.", "invalid-host-", "invalid-". 
// •	Examples of valid emails: info@softuni-bulgaria.org, kiki@hotmail.co.uk, no-reply@github.com, s.peterson@mail.uu.net, info-bg@software-university.software.academy. 
// •	Examples of invalid emails: --123@gmail.com, …@mail.bg, .info@info.info, _steve@yahoo.cn, mike@helloworld, mike@.unknown.soft., s.johnson@invalid-.




function extractEmails(string) {
    let emailPattern = /\b[a-zA-Z0-9]+(?:[._-][a-zA-Z0-9]+)*@(?:[a-zA-Z-]+\.)+[a-zA-Z]{2,}\b/g;

    let matches = string.match(emailPattern);

    if (matches) {

        for (let email of matches) {
            console.log(email);
        }
    }
}
extractEmails(`Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.`);
extractEmails(`Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.`);
