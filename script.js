let positions = Array.from(document.querySelectorAll(".position"));
let timeComponent = document.querySelector("#time");
let startComponent = document.querySelector("#start-game");
let restartComponent = document.querySelector("#restart-game");

let scorePink = 0;
let scoreBlue = 0;
let timeId = null;
let timeLeft = 60;

function resetGame() {
  scorePink = 0;
  scoreBlue = 0;
  timeLeft = 60;

  positions.forEach((position) => {
    position.classList.remove("bird-pink", "bird-blue");
  });

  if (timeId !== null) {
    clearInterval(timeId);
    timeId = null;
  }

  document.getElementById("score-pink").textContent = scorePink;
  document.getElementById("score-blue").textContent = scoreBlue;
  timeComponent.innerText = timeLeft;
}

function startGame() {
  resetGame();
  putBirds();
  timeId = setInterval(update, 1000);
}

function update() {
  timeLeft--;

  if (timeLeft <= 0) {
    endGame();
  } else {
    updateTimeDisplay();
    putBirds();
  }
}

function updateTimeDisplay() {
  timeComponent.innerText = timeLeft;

  if (timeLeft <= 10) {
    timeComponent.style.color = "red";
  }
}

function updateScoreDisplay() {
  document.getElementById("score-pink").textContent = scorePink;
  document.getElementById("score-blue").textContent = scoreBlue;
}

function handleClick(e) {
  if (e.target.classList.contains("bird-pink")) {
    scorePink++;
    e.target.classList.remove("bird-pink");
  } else if (e.target.classList.contains("bird-blue")) {
    scoreBlue++;
    e.target.classList.remove("bird-blue");
  }
  updateScoreDisplay();
}

function putBirds() {
  positions.forEach((position, index) => {
    position.classList.remove("bird-pink", "bird-blue");
    position.style.backgroundImage = "url('./casaPajaros.png')";
    if (Math.random() < 0.33) {
      if (index % 2 === 0) {
        position.classList.add("bird-blue");
        position.style.backgroundImage = "url('./aveAzul.png')";
      } else {
        position.classList.add("bird-pink");
        position.style.backgroundImage = "url('./aveRosa.png')";
      }
    }
  });
}

function endGame() {
  clearInterval(timeId);
}

startComponent.addEventListener("click", startGame);
restartComponent.addEventListener("click", startGame);
positions.forEach((position) => {
  position.addEventListener("click", handleClick);
});
