// You’re tasked with creating an HTML table of students and their scores. 
// You will receive a single string representing an array of objects, the table’s headings should be equal to the object’s keys,
//   while each object’s values should be a new entry in the table. 
//  Any text values must be properly escaped to prevent HTML injection by replacing the characters <, >, &,
//   and " with their corresponding HTML entities (&lt;, &gt;, &amp;, and &quot; respectively)., to avoid introducing dangerous code into the HTML. 
// Input
// The input comes with a single string argument (the array of objects).
// Output
// The output should be printed on the console – for each entry row in the input print the object representing it.
// Note:
// Objects’ keys will always be the same. Check more information for the HTML Entity here.
// HTML
// You are provided with an HTML file to test your table in the browser.




function jsonToHtmlTable(json) {

    function escapeHtml(textValue) {
        const escapedObj = {
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            '"': '&quot;'
        }

        let newTextValue = ``;
        for (const char of textValue) {
            newTextValue += escapedObj[char] || char;
        }

        return newTextValue;
    }

    function makeKeyRow(arr) {
        const keys = Object.keys(arr[0]);
        const escapedKeys = keys.map(key => escapeHtml(key));
        const headerCells = escapedKeys.map(key => `<th>${key}</th>`);
        
        return `<tr>${headerCells.join('')}</tr>`;
    }

    function makeValueRow(obj) {
        const values = Object.values(obj);
        const escapedValues = values.map(value => escapeHtml(String(value)));
        const dataCells = escapedValues.map(value => `<td>${value}</td>`);
        
        return `<tr>${dataCells.join('')}</tr>`;
    }


    const arr = JSON.parse(json);

    let outputArr = ["<table>"];

    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");

    console.log(outputArr.join('\n'));

}
jsonToHtmlTable(`[{
    "Name": "Stamat",
    "Score": 5.5
},
{
    "Name": "Rumen",
    "Score": 6
}]`);
