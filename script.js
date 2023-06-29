let positions = Array.from(document.querySelectorAll('.position'));
let timeComponent = document.querySelector('#time');
let restartComponent = document.querySelector('#restart-game');

let scorePink = 0;
let scoreBlue = 0;
let timeId = null;
let timeLeft = 60;

function startGame() {
  timeId = setInterval(update, 1000);
  placeBirds();
}

function update() {
  timeLeft--;
}

function placeBirds() {
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