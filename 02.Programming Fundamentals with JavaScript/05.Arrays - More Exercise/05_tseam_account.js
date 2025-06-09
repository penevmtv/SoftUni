// As a gamer, Peter has Tseam Account. He loves to buy new games. You are given Peter's account with all of his games-> strings, separated by space.
//  Until you receive "Play!" you will be receiving commands which Peter does with his account.
// You may receive the following commands:
// •	Install {game} - add the game at the last position in the account, but only if it isn't installed already.
// •	Uninstall {game} - delete the game if it exists.
// •	Update {game} - update the game if it exists and place it in the last position.
// •	Expansion {game}-{expansion} - check if the game exists and insert after it the expansion in the following format: "{game}:{expansion}";
// Input
// •	On the first input line you will receive Peter`s account - a sequence of game names, separated by space.
// •	Until you receive "Play!" you will be receiving commands. 
// Output
// •	As output, you must print Peter`s Tseam account. 
// Constraints
// •	The command will always be valid.
// •	The game and expansion will be strings and will contain any character, except '-'.
// •	Allowed working time / memory: 100ms / 16MB.


function solve(arr) {
    let finalArray = arr[0].split(` `);
    let index = 1;
    while (index < arr.length && arr[index] !== `Play!`) {
        let [command, game] = arr[index].split(` `);
        switch (command) {
            case `Install`:
                if (!finalArray.includes(game)) {
                    finalArray.push(game);
                }
                break;
            case `Uninstall`:
                if (finalArray.includes(game)) {
                    let i = finalArray.indexOf(game);
                    finalArray.splice(i, 1);
                }
                break;
            case `Update`:
                if (finalArray.includes(game)) {
                    let i = finalArray.indexOf(game);
                    finalArray.splice(i, 1);
                    finalArray.push(game);
                }
                break;
            case `Expansion`:
                let [underGame1, underGame2] = game.split(`-`);
                if (finalArray.includes(underGame1)) {
                    let i = finalArray.indexOf(underGame1); 
                    finalArray.splice(i + 1, 0, `${underGame1}:${underGame2}`);
                }
                break;
        }
        index++;
    }
    console.log(finalArray.join(` `));
}