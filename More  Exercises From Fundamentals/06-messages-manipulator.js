function solve(arrOfStrs) {

    const capacity = arrOfStrs.shift();

    let recordsMap = new Map();

    for (let input of arrOfStrs) {

        if (input === `Statistics`) break;

        let inputArr = input.split(`=`);
        let command = inputArr.shift();

        if (command === `Add`) {
            let [userName, sent, received] = inputArr;
            sent = Number(sent);
            received = Number(received);
            

            if (!recordsMap.has(userName)) {
                recordsMap.set(userName, new Map([[`sent`, sent], [`received`, received]]));
            }

        } else if (command === `Message`) {
            let [sender, receiver] = inputArr;
            if (recordsMap.has(sender) && recordsMap.has(receiver)) {
                let currSendsent = recordsMap.get(sender).get(`sent`);
                let currRecRec = recordsMap.get(receiver).get(`received`);
                
                recordsMap.get(sender).set(`sent`, currSendsent + 1);
                recordsMap.get(receiver).set(`received`, currRecRec + 1);

                if ((currSendsent + 1) + recordsMap.get(sender).get(`received`) >= capacity) {
                    console.log(`${sender} reached the capacity!`);

                    recordsMap.delete(sender);
                }

                if ((currRecRec + 1) + recordsMap.get(receiver).get(`sent`) >= capacity) {
                    console.log(`${receiver} reached the capacity!`);

                    recordsMap.delete(receiver);
                }
            }

        } else if (command === `Empty`) {
            let userName = inputArr.shift();

            if (recordsMap.has(userName)) {
                recordsMap.delete(userName);

            } else if (userName === `All`) {
                recordsMap.clear();
            }
        }
    }

    console.log(`Users count: ${recordsMap.size}`);
    
    for (let [userName, messagesMap] of recordsMap.entries()) {
        
        let messagesSum = [...messagesMap.entries()].reduce((sum, x) => sum += x[1], 0);
        console.log(`${userName} - ${messagesSum}`);
    }
}
solve([`20`,
`Add=Mark=3=9`,
`Add=Berry=5=5`,
`Add=Clark=4=0`,
`Empty=Berry`,
`Add=Blake=9=3`,
`Add=Michael=3=9`,
`Add=Amy=9=9`,
`Message=Blake=Amy`,
`Message=Michael=Amy`,
`Statistics`]);
