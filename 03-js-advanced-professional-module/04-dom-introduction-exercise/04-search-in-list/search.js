// An HTML page holds a list of towns, a search box, and a [Search] button. 
// Implement the search function to bold and underline the items from the list which include the text from the search box. 
// Also, print the number of items the current search matches in the format `${matches} matches found`.
// Note: It is necessary to clear the results of the previous search.




function search() {
   const list = document.querySelectorAll('#towns li');
   let input = document.getElementById('searchText');
   let result = document.getElementById('result');

   // Clear the results from the previous search
   for (let i = 0; i < list.length; i++) {
      list[i].style.fontWeight = '';
      list[i].style.textDecoration = '';
   }
   
   let resultCounter = 0;
   for (let i = 0; i < list.length; i++) {
      const town = list[i];

      if (town.textContent.includes(input.value)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         resultCounter++;
      }
   }
   
   result.textContent = `${resultCounter} matches found`;

   input.value = '';
}
