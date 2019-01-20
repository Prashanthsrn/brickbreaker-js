
window.onload = function(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    document.addEventListener('keydown', keyPush);

    setup();

    framesPerSecond = 30;
    setInterval(function(){
        if(isPlaying) {
            drawEverything();
            moveEverything();
        }
    }, 1000/framesPerSecond);
}

function setup() {
    paddle = new Paddle(paddleX, paddleY, paddleWidth, paddleHeight, 'lightblue');
    ball = new Ball();
}

function drawEverything() {
    // Drawing the background
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    paddle.draw();
    ball.draw();
}

function moveEverything() {
    //console.log("hi");
    ball.move();
}

function checkCollision() {
    
}

function colorRect(x, y, width, height, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
}

function colorCircle(x, y, radius, color) {
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.arc(x, y, radius, 0, Math.PI*2, true);
    canvasContext.fill();
}

function keyPush(key) {
    switch(key.keyCode) {
        case 37 : //Left
            if(paddleX > 0){
            paddleX -= paddleVel;
            }
            break;
        case 39 : //Right
            if(paddleX < canvas.width - paddleWidth){
            paddleX += paddleVel;
            }
            break;
        case 27 : //Escape
            if(isPlaying){
                isPlaying = false;
            }
            else if(isPlaying == false){
                isPlaying = true;
            }
            break;
    }
}