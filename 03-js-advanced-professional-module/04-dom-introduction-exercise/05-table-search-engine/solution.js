// Write a function that searches in a table by given input.
// When the "Search" button is clicked, go through all cells in the table except for the first row
//   (Student name, Student email, and Student course) and check if the given input has a match
//   (check for both full words and single letters). If the input is an empty string, no rows should be selected or highlighted.
// If any of the rows contain the submitted string, add a class select to that row. Note that more than one row may contain the given string. 
// Оtherwise, if there is no match, nothing should happen.
// Note: After every search ("Search" button is clicked), clear the input field and remove all already selected classes
//   (if any) from the previous search, for the new search to contain only the new result.




function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const textEl = document.getElementById('searchField');

   function onClick() {
      const text = textEl.value;

      if (!text) {
         return;
      }

      const tableRows = document.querySelectorAll('tbody tr');

      for (let i = 0; i < tableRows.length; i++) {
         const row = tableRows[i].querySelectorAll('td');

         for (const element of row) {
            if (element.textContent.includes(text)) {
               tableRows[i].classList.add('select');
               break;       
            } else {
               tableRows[i].classList.remove('select');
            }
         }
      }
      textEl.value = '';
   }
}
