// You will be given an array of strings, which represents a list of all the restaurants with their workers.
// When the [Send] button is clicked:
// •	Display the best restaurant of all the added restaurants with its average salary and best salary. 
// •	If there is a restaurant in the input array that is added more than once, you need to add new workers to the old ones
//  and update the values of the average salary and the best salary.
// •	The best restaurant is the restaurant with the highest average salary. If two restaurants have the same average salary
//  the best restaurant is the first one added.
// •	Display all workers in the best restaurant with their salaries.
// The best restaurant's workers should be sorted by their salaries in descending order.
// Input
// The input will be received from the given textarea in the form of an array of strings. 
// Each string represents a restaurant with its workers: ["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"]
// Output
// •	The output contains two strings
// o	The first one is the best restaurant in the format:
// `Name: {restaurant name} Average Salary: {restaurant avgSalary} Best Salary: {restaurant bestSalary}`
// avgSalary and bestSalary must be formatted to the second decimal point.
// o	The second one is all the workers in that restaurant in the following format:
// `Name: {worker name} With Salary: {worker salary} Name: {worker2 name} With Salary: {worker2 salary}
//  Name: {worker3 name} With Salary: {worker3 salary}…`
//  •	The workers will be always unique




function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const restaurantsStrs = document.querySelector('#inputs textarea').value;
      const restaurantsArr = JSON.parse(restaurantsStrs);

      const restaurantsObj = {};

      for (const restaurantInfo of restaurantsArr) {
         const [restaurantName, workersStr] = restaurantInfo.split(' - ');
         const workersArr = workersStr.split(', ');

         if (!restaurantsObj[restaurantName]) restaurantsObj[restaurantName] = {
            averageSalary: 0,
            bestSalary: 0,
            workersArr: []
         };

         for (const workersInfo of workersArr) {
            const [name, salary] = workersInfo.split(' ');

            restaurantsObj[restaurantName].workersArr.push([name, salary]);
         }
      }

      for (const [restaurantName, workersObj] of Object.entries(restaurantsObj)) {
         let bestSalary = 0;
         let salarySum = 0;

         const workersData = workersObj.workersArr;
         for (let [_, salary] of workersData) {
            salary = Number(salary);
            salarySum += salary;
            bestSalary = Math.max(bestSalary, salary);
         }
         const averageSalary = (salarySum / workersData.length);

         restaurantsObj[restaurantName].averageSalary = averageSalary.toFixed(2);
         restaurantsObj[restaurantName].bestSalary = bestSalary.toFixed(2);
      }

      const sortedRestaurants = Object.entries(restaurantsObj).sort((a, b) => b[1].averageSalary - a[1].averageSalary);
      const [bestRestaurant, workersObj] = sortedRestaurants[0];

      document.querySelector('#bestRestaurant p').textContent =
         `Name: ${bestRestaurant} Average Salary: ${workersObj.averageSalary} Best Salary: ${workersObj.bestSalary}`;

      const sortedWorkers = workersObj.workersArr.sort((a, b) => b[1] - a[1]);
      const bestWorkers = sortedWorkers.map(worker => `Name: ${worker[0]} With Salary: ${worker[1]}`).join(' ');

      document.querySelector('#workers p').textContent = bestWorkers;

   }
}
