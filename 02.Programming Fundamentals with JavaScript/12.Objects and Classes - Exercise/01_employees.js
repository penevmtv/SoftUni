// You're tasked to create a list of employees and their personal numbers.
// You will receive an array of strings. Each string is an employee name and to assign them a personal number
//  you have to find the length of the name (whitespace included). 
// Try to use an object.
// At the end print all the list employees in the following format:
//  "Name: {employeeName} -- Personal Number: {personalNum}" 



function employees(arrOfStr) {
    class Employee {
        constructor(employeeName, personalNum) {
            this.employeeName = employeeName;
            this.personalNum = personalNum;
        }
        result() {
            return `Name: ${this.employeeName} -- Personal Number: ${this.personalNum}`;
        }
    }

    for (let element of arrOfStr) {
        let name = element;
        let number = element.length;

        let employeeObj = new Employee(name, number);
        console.log(employeeObj.result());
    }
}
employees([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
]);

