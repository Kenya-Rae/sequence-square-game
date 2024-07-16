  function howTo() {
    var x = document.getElementById("how-to-play");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

const square0 = document.querySelector('.blue');
const square1 = document.querySelector('.cyan');
const square2 = document.querySelector('.yellow');
const square3 = document.querySelector('.green');
const square4 = document.querySelector('.red');
const square5 = document.querySelector('.orange');
const square6 = document.querySelector('.purple');
const square7 = document.querySelector('.pink');
const square9 = document.querySelector('.white');

let sequence = [];
let userSequence = [];

const startButton = document.querySelector('.start-btn');
const info = document.querySelector('.info');

function startGame() {
  startButton.classList.add('hidden');
  info.classList.remove('hidden');
  info.textContent = 'Wait for Sequence...';

  info.textContent.style.color('white');
}

startButton.addEventListener('click', startGame);