// Kate is stuck in a maze. You should help her to find her way out.
// On the first line, you will be given how many rows there are in the maze. On the following n lines, you will be given the maze itself. 
// Here is a legend for the maze:
// •	"#" - means a wall; Kate cannot go through there
// •	" " - means empty space; Kate can go through there
// •	"k" - the initial position of Kate; start looking for a way out from there
// There are two options: Kate either gets out or not:
// •	If Kate can get out, print the following: 
// "Kate got out in {number_of_moves} moves". 
// Note: If there are two or more ways out, she always chooses the longest one.
// •	Otherwise, print: "Kate cannot get out".




function wayOut(inputArr) {

    function isExit(row, col, rows, cols) {
        return row === 0 || row === rows - 1 || col === 0 || col === cols - 1;
    }

    function dfs(row, col, moves) {
        const positionKey = `${row},${col}`;

        if (visited.has(positionKey) || maze[row][col] === `#`) {
            return;
        }
        visited.add(positionKey);

        if (isExit(row, col, rows, cols)) {
            if (moves > maxMoves) {
                maxMoves = moves;
            }

            visited.delete(positionKey);
            return;
        }

        for (const [dirRow, dirCol] of directions) {
            const newRow = row + dirRow;
            const newCol = col + dirCol;

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < maze[newRow].length) {
                dfs(newRow, newCol, moves + 1);
            }
        }

        visited.delete(positionKey);
    }

    let workingArr = inputArr.slice();
    const rows = Number(workingArr.shift());

    let maze = workingArr;
    maze = maze.map(x => x.split(``));

    const cols = maze.reduce((max, row) => Math.max(max, row.length), 0);

    let startRow, startCol;
    for (let i = 0; i < rows; i++) {
        if (maze[i].includes(`k`)) {
            startRow = i;
            startCol = maze[i].indexOf(`k`);
            break;
        }
    }

    if (isExit(startRow, startCol, rows, cols)) {
        return `Kate got out in 0 moves`;
    }

    let maxMoves = -1;
    const visited = new Set();
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    dfs(startRow, startCol, 1);
    
    return maxMoves === -1 ? `Kate cannot get out` : `Kate got out in ${maxMoves} moves`

}
console.log(wayOut([
  4,
  "######",
  "##  k#",
  "## ###",
  "## ###"
]));
