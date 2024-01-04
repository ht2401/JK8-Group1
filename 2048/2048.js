var board;
var score = 0;
var rows = 4;
var columns = 4;
var gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById("board").append(tile);
        }
    }
    setTwo();
    setTwo();
    console.log("Game kết thúc với số điểm là: " + gameOver);

    isGameOver();
    if (gameOver) {
        showGameOver();
    }
}

function updateTile(tile, num) {
    tile.innerText = "";
    tile.classList.value = ""; 
    tile.classList.add("tile");
    if (num > 0) {
        tile.innerText = num.toString();
        if (num <= 4096) {
            tile.classList.add("x"+num.toString());
        } else {
            tile.classList.add("x8192");
        }                
    }
}

document.addEventListener('keyup', (e) => {
    if (!gameOver) {
        if (e.code == "ArrowLeft") {
            slideLeft();
        }
        else if (e.code == "ArrowRight") {
            slideRight();
        }
        else if (e.code == "ArrowUp") {
            slideUp();
        }
        else if (e.code == "ArrowDown") {
            slideDown();
        }
        document.getElementById("score").innerText = score;
        isGameOver();
        setTwo();
    }
})

function filterZero(row){
    return row.filter(num => num != 0); 
}

function slide(row) {
    
    row = filterZero(row); 
    for (let i = 0; i < row.length-1; i++){
        if (row[i] == row[i+1]) {
            row[i] *= 2;
            row[i+1] = 0;
            score += row[i];
        }
    } 
    row = filterZero(row); 
   
    while (row.length < columns) {
        row.push(0);
    } 
    return row;
}

function slideLeft() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row = slide(row);
        board[r] = row;
    }
    updateBoard();
}

function slideRight() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];         
        row.reverse();              
        row = slide(row)            
        board[r] = row.reverse();   
    }
    updateBoard();
}

function slideUp() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row = slide(row);
        for (let r = 0; r < rows; r++){
            board[r][c] = row[r];
        }
    }
    updateBoard();
}

function slideDown() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row.reverse();
        row = slide(row);
        row.reverse();
        for (let r = 0; r < rows; r++){
            board[r][c] = row[r];
        }
    }
    updateBoard();
}

function setTwo() {
    if (!hasEmptyTile()) {
        return;
    }
    let found = false;
    while (!found) {
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        if (board[r][c] == 0) {
            board[r][c] = 128;
            found = true;
        }
    }
}

function hasEmptyTile() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] == 0) { 
                return true;
            }
        }
    }
    return false;
}

function isGameOver() {
    if (!hasEmptyTile() && !canMove()) {
        gameOver = true;
        showGameOver();
    }
}

function showGameOver() {
    // Hiển thị thông báo khi kết thúc game
    document.getElementById("gameOverScore").innerText = score;
    $('#gameOverModal').modal('show');
    console.log("Game kết thúc với số điểm là: " + score);
}

function canMove() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let currentNum = board[r][c];
            if (
                (c > 0 && (board[r][c - 1] === 0 || currentNum === board[r][c - 1])) ||
                (c < columns - 1 && (board[r][c + 1] === 0 || currentNum === board[r][c + 1])) ||
                (r > 0 && (board[r - 1][c] === 0 || currentNum === board[r - 1][c])) ||
                (r < rows - 1 && (board[r + 1][c] === 0 || currentNum === board[r + 1][c]))
            ) {
                return true;
            }
        }
    }
    return false;
}


function updateBoard() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}
