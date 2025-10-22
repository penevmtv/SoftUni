/*You will be given a web page, containing a table and output area.When the "Generate Report" button is pressed:
•	You must generate a JSON report from the data inside the table, by only taking the columns, which are selected.
Each table header has a checkbox. If the checkbox is checked, then the data from this column must be included in the report. 
Unchecked columns must be omitted. For every row (excluding the header):
•	Create an object with properties for each of its columns.
•	The name of each property is the name attribute of the column’s header, and the value is the text content of the cell.
•	Store the result in an array and output it as a JSON string display it inside the <textarea> with id "output". 
The output must be a JSON string, displayed in the <textarea> with id "output".*/



function generateReport() {
    const output = document.getElementById('output');
    
    const allCheckBoxes = document.querySelectorAll('thead input[type="checkbox"]');
    const allBodyRows = document.querySelectorAll('tbody tr');
    const resultArr = [];
    const selectedColumns = [];
    
    allCheckBoxes.forEach((box, idx) => {
        if (box.checked) {
            selectedColumns.push(idx);
        }
    });

    if (selectedColumns.length === 0) {
        return;
    }

    for (const row of allBodyRows) {
        const dataObj = {};
        const cells = row.querySelectorAll('td');

        for (const idx of selectedColumns) {
            const key = allCheckBoxes[idx].name;
            const value = cells[idx].textContent;
            dataObj[key] = value;
        }

        resultArr.push(dataObj);
    }

    output.value = JSON.stringify(resultArr, null, 2);
}
