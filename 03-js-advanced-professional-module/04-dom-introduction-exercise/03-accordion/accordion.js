// An HTML file is given and your task is to show more/less information. 
// By clicking the [More] button, it should reveal the content of a hidden div and changes the text of the button to [Less]. 
// When the same link is clicked again (now reading Less), hide the div and change the text of the link to More. 
// Link action should be toggleable (you should be able to click the button an infinite amount of times).



function toggle() {
    let info = document.getElementById('extra');
    let buttonTextEl = document.getElementsByClassName('button')[0];

    const text = buttonTextEl.textContent;
    switch (text) {
        case 'More':
            info.style.display = 'block';
            buttonTextEl.textContent = 'Less';
            break;
        case 'Less':
            info.style.display = 'none';
            buttonTextEl.textContent = 'More';
            break;
    }
}
