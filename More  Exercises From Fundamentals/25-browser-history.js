// As input, you will receive two parameters: an object and a string array.
// The object will be in format: {Browser Name}:{Name of the browser}, Open tabs:[…], Recently Closed: […], Browser Logs: […]. 
// Your task is to fill in the object based on the actions we will get in the array of strings.
// You can open any site in the world as many times as you like; if you do that add it to the open tabs.
// You can close only these tabs you have opened already! If the current action contains a valid opened site, you should remove it from
//  "Open Tabs" and put it into "Recently closed", otherwise don't do anything!
// Browser Logs will hold every single Valid action, which you did (Open and Close).
// There is a special case in which you can get an action that says: "Clear History and Cache". That means you should empty the whole object.
// In the end, print the object in the format:
// {Browser name}
// Open Tabs: {[…]} // Joined by comma and space
// Recently Closed: {[…]} // Joined by comma and space
// Browser Logs: {[…]} // Joined by comma and space




function browserHistory(objInput, arrInput) {
    for (const element of arrInput) {
        if (element.split(` `).length === 2) {
            const [command, site] = element.split(` `);

            switch (command) {
                case `Open`:
                    objInput[`Open Tabs`].push(site);
                    objInput[`Browser Logs`].push(element);
                    break;
                case `Close`:
                    let openArr = objInput[`Open Tabs`];
                    if (openArr.includes(site)) {
                        const siteIndex = openArr.indexOf(site);
                        openArr.splice(siteIndex, 1);
                        objInput[`Open Tabs`] = openArr;
                        objInput[`Recently Closed`].push(site);
                        objInput[`Browser Logs`].push(element);
                    }
                    break;
            }
        } else {
            objInput[`Open Tabs`] = [];
            objInput[`Recently Closed`] = [];
            objInput[`Browser Logs`] = [];
        }
    }
    console.log(objInput[`Browser Name`]);
    console.log(`Open Tabs: ${objInput[`Open Tabs`].join(`, `)}`);
    console.log(`Recently Closed: ${objInput[`Recently Closed`].join(`, `)}`);
    console.log(`Browser Logs: ${objInput[`Browser Logs`].join(`, `)}`);
}
browserHistory(
    {
    "Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
    "Recently Closed":["Yahoo","Gmail"],
    "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]
    },
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
);
