//Write a function, which keeps the information about companies and their employees. 
//You will receive an array of strings containing the company name and employee's id. 
//Add each employee to the given company. Keep in mind that a company cannot have two
//employees with the same id.
//When you finish reading data, order the companies by their name in ascending order. 
//Print the company name and each employee's id in the following format:

//{companyName}
//-- {id1}
//-- {id2}
//-- {idN}
//Input / Constraints
//•	The input come as array of strings, each in the format:
//"{companyName} -> {employeeId}".
//•	The input always will be valid.




function companyUsers(inputArray) {
  let companyMap = new Map();
  for (let element of inputArray) {
    let [companyName, employee] = element.split(` -> `);
    
    if (!companyMap.has(companyName)) {
      companyMap.set(companyName, [employee]);
    } else {
      if (!companyMap.get(companyName).includes(employee)) {
        companyMap.get(companyName).push(employee);
      }
    }
  }
  let sortedNamesArr = [...companyMap.keys()].sort((a, b) => a.localeCompare(b));
  
  for (let name of sortedNamesArr) {
    console.log(name);
    
    for (let empl of companyMap.get(name)) {
      console.log(`-- ${empl}`);
    }
  }
}
companyUsers([
'SoftUni -> AA12345',
'SoftUni -> BB12345',
'Microsoft -> CC12345',
'HP -> BB12345'
]);
