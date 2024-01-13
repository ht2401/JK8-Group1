var board;
var score = 0;
const rows = 4;
const columns = 4;
localStorage.setItem("highestScore",0);


function initGame() {
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let box = document.createElement("div");
            box.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updateBox(box, num);
            document.getElementById("board").append(box);
        }
    }
    addBlock();
    addBlock();
}

function updateBox(box, num) {
    box.innerText = "";
    box.classList.value = "";
    box.classList.add("box");
    if (num > 0) {
        box.innerText = num.toString();
        if (num <= 4096) {
            box.classList.add("x"+num.toString());
        } else {
            box.classList.add("x8192");
        }
    }
}

document.addEventListener('keyup', (e) => {
    if (e.code == "ArrowLeft") {
        slideLeft();
        addBlock();
    }
    else if (e.code == "ArrowRight") {
        slideRight();
        addBlock();
    }
    else if (e.code == "ArrowUp") {
        slideUp();
        addBlock();

    }
    else if (e.code == "ArrowDown") {
        slideDown();
        addBlock();
    }
    checkGameOver();
    document.getElementById("score").innerText = score;
})

function removeZero(row){
    return row.filter(num => num != 0);
}

function slide(row) {
    
    row = removeZero(row);
    for (let i = 0; i < row.length-1; i++){
        if (row[i] == row[i+1]) {
            row[i] *= 2;
            row[i+1] = 0;
            score += row[i];
            document.getElementById("current-score").innerHTML = "";
            document.getElementById("current-score").innerHTML = score;

        }
    }
    row = removeZero(row);
    
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
        for (let c = 0; c < columns; c++){
            let box = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateBox(box, num);
        }
    }
}

function slideRight() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];         
        row.reverse();              
        row = slide(row)            
        board[r] = row.reverse();   
        for (let c = 0; c < columns; c++){
            let box = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateBox(box, num);
        }
    }
}

function slideUp() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row = slide(row);
        for (let r = 0; r < rows; r++){
            board[r][c] = row[r];
            let box = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateBox(box, num);
        }
    }
}

function slideDown() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row.reverse();
        row = slide(row);
        row.reverse();
        
        for (let r = 0; r < rows; r++){
            board[r][c] = row[r];
            let box = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateBox(box, num);
        }
    }
}

function addBlock() {
    if (!hasEmptyBox()) {
        return;
    }
    let found = false;
    while (!found) {
        let tempArr = [];
        for (let rr = 0; rr < rows; rr++) {
            for (let cc = 0; cc < columns; cc++) {
                if (board[rr][cc] == 0) { 
                    tempArr.push([rr,cc]);
                }
            }
        }
        
        let tempbox = Math.floor(Math.random() * tempArr.length);
        let r = tempArr[tempbox][0];
        let c = tempArr[tempbox][1];
        // let r = Math.floor(Math.random() * rows);
        // let c = Math.floor(Math.random() * columns);
        if (board[r][c] == 0) {
            let x = Math.floor(Math.random() * 2) + 1;
            x *=2;
            board[r][c] = x;
            let box = document.getElementById(r.toString() + "-" + c.toString());
            box.innerText = x;
            box.classList.add("x" + x);
            found = true;
        }
    }
}

function hasEmptyBox() {
    let count = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] == 0) { 
                return true;
            }
        }
    }
    return false;
}

function checkGameOver() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (board[i][j] === 0) {
                return;
            }
            if (j < rows - 1 && board[i][j] === board[i][j + 1]) {
                return;
            }
            if (i < rows - 1 && board[i][j] === board[i + 1][j]) {
                return;
            }
        }
    }
    let highestScore = localStorage.getItem("highestScore");
    if(score > highestScore){
        document.getElementById("highest-score").innerHTML = score;
        localStorage.setItem("highestScore",score);
    }
    document.getElementById("game-over-score").innerHTML = score;
    document.getElementById("game-over").style.display = 'flex';
    
}

document.getElementById("restart-btn").addEventListener("click",e =>{
    document.getElementById("game-over").style.display = 'none';
    score = 0;
    let cboard = document.getElementById("board");
    let remove = cboard.lastElementChild;
    while(remove){
        cboard.removeChild(remove);
        remove = cboard.lastElementChild;
    }
    initGame();
})

initGame();
