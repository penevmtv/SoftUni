// Create function edit() that takes three parameters.

// Input / Output
// The first parameter is a reference to an HTML element, the other two parameters are string–match and replacer.
// You have to replace all occurrences of the match inside the text content of the given element with a replace.



function editElement(ref, match, replacer) {
    ref.textContent = ref.textContent.replaceAll(match, replacer);
};
