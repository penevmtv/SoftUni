// Write a JS function that expands a hidden section of text when a link is clicked. 
// The link should disappear as the rest of the text shows up.
// Input / Output
// There will be no Input / Output, your program should instead modify the DOM of the given HTML document.




function showText() {
  document.querySelector('#more').style.display = 'none';
    document.querySelector('#text').style.display = 'inline';
}
