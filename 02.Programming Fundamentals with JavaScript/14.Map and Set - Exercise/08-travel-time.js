// Write a function that collects and orders information about travel destinations.
// As input, you will receive an array of strings.
// Each string will consist of the following information with the format:
// "Country name > Town name > Travel cost"

// The Country name will be a string, the Town name will be a unique string, Travel cost will be a number.
// If you receive the same Town name twice, you should keep the cheapest offer. Have in mind that one Country may have several Towns to visit.
// After you finish the organizational part, you need to let Steven know which destination point to visit first. The order will be as follows:
//   First sort Country names alphabetically and then sort by lowest Travel cost.




function travelTime(arrOfStrs) {
  let travelMap = new Map();
  
  for (let destination of arrOfStrs) {
    
    let [country, town, cost] = destination.split(` > `);
    cost = Number(cost);
    
    if (travelMap.has(country)) {
      if (travelMap.get(country).has(town)) {
        travelMap.get(country).set(town, Math.min(travelMap.get(country).get(town), cost));
      } else {
        travelMap.get(country).set(town, cost);
      }
    } else {
      travelMap.set(country, new Map([[town, cost]]));
    }
    
  }
  let sortedCountries = [...travelMap.keys()].sort((a, b) => a.localeCompare(b));
  for (let country of sortedCountries) {
    
    let sortedTowns = [...travelMap.get(country).entries()].sort((a, b) => a[1] - b[1]);
    let resultStr = `${country} -> `;
    for (let [town, cost] of sortedTowns) {
      resultStr += `${town} -> ${cost} `;    
    }
    console.log(resultStr);
  }
}
travelTime([
"Bulgaria > Sofia > 500",
"Bulgaria > Sopot > 800",
"France > Paris > 2000",
"Albania > Tirana > 1000",
"Bulgaria > Sofia > 200"
]
);
