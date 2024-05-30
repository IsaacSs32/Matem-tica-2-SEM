const canvas = document.getElementById("game_screen");
const gameContext = canvas.getContext("2d");

const gamebaseWidth = 70;
const gamebaseHeight = 10;
const ballRadius = 10;

let gamecenterX = canvas.width / 2;
const gamecenterY = canvas.height - gamebaseHeight / 2 - ballRadius;

let ballY = 0;
let ballX = Math.random() * canvas.width;
let ballSpeed = 2;

let gameRunning = false;
let gameOver = false;
let score = 0;

function drawBase() {
  gameContext.clearRect(0, 0, canvas.width, canvas.height);
  gameContext.fillStyle = "white";
  gameContext.fillRect(
    gamecenterX - gamebaseWidth / 2,
    gamecenterY - gamebaseHeight / 2,
    gamebaseWidth,
    gamebaseHeight
  );
}

function drawBall() {
  gameContext.beginPath();
  gameContext.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  gameContext.fillStyle = "green";
  gameContext.fill();
  gameContext.closePath();
}

function moveBase(direction) {
  const step = 10;
  if (direction === "left") {
    gamecenterX -= step;
    if (gamecenterX - gamebaseWidth / 2 < 0) {
      gamecenterX = gamebaseWidth / 2;
    }
  } else if (direction === "right") {
    gamecenterX += step;
    if (gamecenterX + gamebaseWidth / 2 > canvas.width) {
      gamecenterX = canvas.width - gamebaseWidth / 2;
    }
  }
  drawBase();
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveBase("left");
  } else if (event.key === "ArrowRight") {
    moveBase("right");
  }
});

function startGame() {
  if (gameOver) {
    gameOver = false;
    gameRunning = false;
    ballY = 0;
    ballX = Math.random() * canvas.width;
    gamecenterX = canvas.width / 2;
    score = 0;
    document.getElementById("score_display").innerText = "Score: " + score;
  }
  gameRunning = true;
  drawBase();
  drawBall();
  setInterval(moveBall, 50);
}

function moveBall() {
  if (!gameRunning) return;
  gameContext.clearRect(0, 0, canvas.width, canvas.height);
  drawBase();
  drawBall();
  ballY += ballSpeed;

  //ballY + ballRadius: Esta é a posição vertical da parte inferior da bola.//
  // Quando a soma da posição vertical da bola (ballY) e o seu raio (ballRadius)
  //é maior ou igual à posição vertical do centro da base do jogo (gamecenterY)
  // menos metade da altura da base do jogo (gamebaseHeight / 2), significa que a
  // parte inferior da bola alcançou ou ultrapassou o min da base do jogo.

  if (
    ballY + ballRadius >= gamecenterY - gamebaseHeight / 2 &&
    ballX >= gamecenterX - gamebaseWidth / 2 &&
    ballX <= gamecenterX + gamebaseWidth / 2
  ) {
    ballY = 0;
    ballX = Math.random() * canvas.width;
    score += 10;
    document.getElementById("score_display").innerText = "Score: " + score;
  }

  if (ballY + ballRadius > canvas.height) {
    gameOver = true;
    gameRunning = false;
    endGame();
  }
}

function endGame() {
  gameContext.fillStyle = "white";
  gameContext.font = "30px Arial";
  gameContext.textAlign = "center";
  gameContext.fillText("Game Over", canvas.width / 2, canvas.height / 2);
}

document.getElementById("start_button").addEventListener("click", startGame);
s;
