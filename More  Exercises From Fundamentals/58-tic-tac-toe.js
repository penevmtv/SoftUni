// Make a tic-tac-toe console application.
// You will receive an array of arrays. As you know there are two players in this game,
//  so the first element of the input will be the first player's chosen coordinates, the second element will be the second player's turn coordinates, and so on.
// The first player's mark is X and the second player's mark is O.
// Input
// One parameter:
// •	An array - the moves in a row that players make
// Output
// •	There are two players - X and O
// •	If  a player tries to make his turn on already taken place, he should take his turn again and you should print the following message:
// "This place is already taken. Please choose another!"
// •	If there are no free spaces on the dashboard and nobody wins the game should end and you should print the following message:
// "The game ended! Nobody wins :("
// •	If someone wins you should print the following message and  the current state of the dashboard:
// "Player {x} wins!"
// Note: When printing the state of the dashboard the elements of each row of the dashboard should be separated by "\t" and each row should be on a new line.

// Constraints
// The elements in the input array will always be enough to end the game. 




function ticTacToe(movesArr) {

    function checkWin(arr, player) {
        for (let i = 0; i < arr.length; i++) {
            const row = arr[i];
            if (row.every(x => x === player)) {
                return true;
            }
        }
        for (let col = 0; col < arr.length; col++) {
            if (arr[0][col] === player &&
                arr[1][col] === player &&
                arr[2][col] === player) {
                return true;
            }
        }

        if (arr[0][0] === player &&
            arr[1][1] === player &&
            arr[2][2] === player) {
            return true;
        }


        if (arr[2][0] === player &&
            arr[1][1] === player &&
            arr[0][2] === player) {
            return true;
        }
        return false;
    }

    function haveFreeSpaces(arr) {
        for (const element of arr) {
            if (element.some(y => y === false)) {
                return true;
            }
        }
        return false;
    }

    const printDashboard = arr => arr.forEach(row => console.log(row.join(`\t`)));

    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]

    let playerMove = `X`;

    for (let i = 0; i < movesArr.length; i++) {

        const [row, col] = movesArr[i].split(` `).map(Number);

        if (dashboard[row][col] === false) {

            dashboard[row][col] = playerMove;

            if (checkWin(dashboard, playerMove)) {
                console.log(`Player ${playerMove} wins!`);

                return printDashboard(dashboard);
            }
            playerMove = playerMove === `X` ? `O` : `X`;

        } else if (haveFreeSpaces(dashboard)) {
            console.log(`This place is already taken. Please choose another!`);
        }
          
        if (!haveFreeSpaces(dashboard)) {
            console.log(`The game ended! Nobody wins :(`);

            return printDashboard(dashboard);
        }
    }
}
ticTacToe([
    "0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
]);
