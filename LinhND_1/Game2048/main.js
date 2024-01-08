var gameBoard, score = 0, rows = 4, columns = 4;

window.onload = function(){
    startGame();
}

function startGame(){

    // khởi tạo mảng 2 chiều cho bảng game
    gameBoard = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {

            // duyệt từng cột và từng hàng, tạo một thẻ div và gán class cho thẻ tại vị trí 
            // của bảng có giá trị > 0
           let tile = document.createElement("div");
           tile.id = row.toString() + "-" + col.toString();
           let num = gameBoard[row][col];
           updateTile(tile, num);
           document.getElementById("gameBoard").append(tile);
        }
    }

    randomTwo();
    randomTwo();

    gameBoard.forEach(element => {
        if(element == 2048){
            console.log("Bạn đã phá đảo trò chơi");
            return;
        }
    });

}

function checkEmptyTile(){
    for(let row = 0; row < rows; row++){
        for(let col = 0; col < columns; col++){
            if(gameBoard[row][col] == 0){
                return true;
            }
        }
    }
    return false;
}

function randomTwo(){

    // nếu không còn chỗ trên board sẽ dừng hàm
    if(!checkEmptyTile()){
        return;
    }
    let flag = false;
    while(!flag){
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);

        if(gameBoard[r][c] == 0){
            gameBoard[r][c] = 2;
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            tile.innerText = 2;
            tile.classList.add("tile2");
            flag = true;
        }
    }
}

function updateTile(tile, num){

    // Làm mới giá trị và văn bản trong 1 tile
    tile.innerText = "";
    tile.classList.value = "";
    tile.classList.add("tile");
    if(num > 0){
        tile.innerText = num;
        if(num <= 1024){
            tile.classList.add("tile" + num.toString());
        }
        else{
            tile.classList.add("tile2048");
        }
    }
}

document.addEventListener("keyup", (e) => {
    if(e.code == "ArrowLeft"){
        shiftLeft();
        randomTwo();
    }
    if(e.code == "ArrowRight"){
        shiftRight();
        randomTwo();
    }
    if(e.code == "ArrowUp"){
        shiftUp();
        randomTwo();
    }
    if(e.code == "ArrowDown"){
        shiftDown();
        randomTwo();
    }
    // cập nhật lại điểm
    document.getElementById("score").innerText = score;
})

function filterZero(row){
    // tạo một mảng mới chứa các phần tử của một hàng, không chứa các phần tử 0
    return row.filter(num => num != 0);
}

function shift(row){
    row = filterZero(row);

    for(let i = 0; i < row.length-1; i++){

        // giả sử phần tử a[0][1] và a[0][2] trùng nhau thì khi shift left
        // ta sẽ cộng phần tử a[0][2] vào a[0][1] và set a[0][2] bằng 0
        if(row[i] == row[i+1]){
            row[i] += row[i+1];
            row[i+1] = 0;
            score += row[i];
        }

    }
    // Loại bỏ các phần tử số 0
    row = filterZero(row);

    // Add lại các phần tử 0 vào cuối dòng
    while(row.length < 4){
        row.push(0);
    }

    return row;

}

function shiftLeft(){
    for(let r = 0; r < rows; r++){
        let row = gameBoard[r];
        row = shift(row);   
        gameBoard[r] = row;

        for(let c = 0; c < columns; c++){
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            // console.log(tile);
            // console.log(r);
            // console.log(c);
            // console.log(gameBoard[0][0]);
            let num = gameBoard[r][c];
            updateTile(tile, num);
        }
    }
}

function shiftRight(){
    for(let r = 0; r < rows; r++){
        let row = gameBoard[r];
        row.reverse();
        row = shift(row);  
        row.reverse(); 
        gameBoard[r] = row;

        for(let c = 0; c < columns; c++){
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            // console.log(tile);
            // console.log(r);
            // console.log(c);
            // console.log(gameBoard[0][0]);
            let num = gameBoard[r][c];
            updateTile(tile, num);
        }
    }
}

function shiftUp(){
    for(let col = 0; col < columns; col++){
        let row = [gameBoard[0][col], gameBoard[1][col], gameBoard[2][col], gameBoard[3][col]];
        row = shift(row);
        gameBoard[0][col] = row[0];
        gameBoard[1][col] = row[1];
        gameBoard[2][col] = row[2];
        gameBoard[3][col] = row[3];

        for(let row = 0; row < rows; row++){
            let tile = document.getElementById(row.toString() + "-" + col.toString());
            // console.log(tile);
            // console.log(r);
            // console.log(c);
            // console.log(gameBoard[0][0]);
            let num = gameBoard[row][col];
            updateTile(tile, num);
        }
    }
}

function shiftDown(){
    for(let col = 0; col < columns; col++){
        let row = [gameBoard[0][col], gameBoard[1][col], gameBoard[2][col], gameBoard[3][col]];
        row.reverse();
        row = shift(row);
        row.reverse();
        gameBoard[0][col] = row[0];
        gameBoard[1][col] = row[1];
        gameBoard[2][col] = row[2];
        gameBoard[3][col] = row[3];

        for(let row = 0; row < rows; row++){
            let tile = document.getElementById(row.toString() + "-" + col.toString());
            // console.log(tile);
            // console.log(r);
            // console.log(c);
            // console.log(gameBoard[0][0]);
            let num = gameBoard[row][col];
            updateTile(tile, num);
        }
    }
}