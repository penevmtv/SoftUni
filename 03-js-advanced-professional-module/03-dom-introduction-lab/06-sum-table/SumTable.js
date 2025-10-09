// Write a JS function that finds the first table in a document and sums the values in the last column. 
// The result is then displayed in an element with ID "sum".
// Input / Output
// There will be no Input / Output, your program should instead modify the DOM of the given HTML document.




function sumTable() {
    let sum = 0;
    const rows = document.querySelector('table').querySelectorAll('tr');
    for (let i = 1; i < rows.length -1; i++) {
        const number = Number(rows[i].getElementsByTagName('td')[1].textContent) || 0;
        sum += number;
    }
    document.getElementById('sum').textContent = sum;
}
