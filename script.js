let positions = Array.from(document.querySelectorAll('.position'));
let timeComponent = document.querySelector('#time');
let restartComponent = document.querySelector('#restart-game');

let scorePink = 0;
let scoreBlue = 0;
let timeId = null;
let timeLeft = 60;

function resetGame() {
  scorePink = 0;
  scoreBlue = 0;
  timeLeft = 60;

   positions.forEach((position, index) => {
     position.classList.remove('bird-pink', 'bird-blue');
   });

   if (timeId !== null) {
     clearInterval(timeId);
     timeId = null;
   }
}

function startGame() {
  timeId = setInterval(update, 1000);
  putBirds();
}

function update() {
  timeLeft--;
  putBirds();
  updateTimeDisplay();
}

function updateTimeDisplay() {
  timeComponent.textContent = timeLeft.toString();
}

function handleClick(e) {
  if (e.target.classList.contains('bird-pink')) {
    scorePink++;
    e.target.classList.remove('bird-pink');
  } else if (e.target.classList.contains('bird-blue')) {
    scoreBlue++;
    e.target.classList.remove('bird-blue');
  }
}

function putBirds() {
  positions.forEach(position => {
    position.classList.remove('bird-pink', 'bird-blue');
    if (Math.random() < 0.33) {
      if (index % 2 === 0) {
        position.classList.add('bird-pink');
      } else {
        position.classList.add('bird-blue');
      }
    }
  });
}

restartComponent.addEventListener("click", startGame);
positions.forEach((position) => {
  position.addEventListener("click", handleClick);
});

startGame();