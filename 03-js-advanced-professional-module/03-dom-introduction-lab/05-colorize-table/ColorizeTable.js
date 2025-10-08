// Write a JS function that changes the color of all even rows when the user clicks a button. 
// Apply the color "Teal" to the target rows.
// Input / Output
// There will be no Input / Output, your program should instead modify the DOM of the given HTML document.




function colorize() {
    const list = Array.from(document.getElementsByTagName('tr'));
    list.forEach((row, idx) => {
        if (idx % 2 === 1) row.style.backgroundColor = 'Teal';
    });    
}
