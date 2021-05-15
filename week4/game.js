
let boardGame = document.getElementById("ticTacToetable");
let player1 = "X"
let player2 = "O"
let player = player1

function selection(id) {

    // console.log('it works!');
    // console.log(id)
    document.getElementById(id).innerHTML = player;
    if (player === player1) {
        player = player2
    }
    else player = player1

}

function resetTable() {
    // console.dir(boardGame)
    console.log("There are this many rows in this board: " + boardGame.rows.length)
    for (let i = 0; i < boardGame.rows.length; i++) {
        // console.log("value inside first row " + boardGame.rows[i]);
        row = boardGame.rows[i];

        for (let j = 0; j < row.cells.length; j++) {
            row.cells[j].innerHTML = ""
        }
    }

}