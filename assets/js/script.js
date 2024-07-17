// Listening for user input //
document.addEventListener("DOMContentLoaded", userInputHandler);

function userInputHandler() {
  game.buttons = document.querySelectorAll(".square");
  game.buttons.forEach((button) => {
    button.addEventListener("click", () => userClickHandler(button));
  });
}
// Adding.light css class //
function userClickHandler(button) {
  button.classList.add("light");
  setTimeout(function () {
    button.classList.remove("light");
  }, 300);

  const dataId = button.dataset.id;
  game.usersMoves.push(dataId);
  console.log("Button", dataId);

  // Get the index of the current move in the sequence //
  const currentMoveIndex = game.usersMoves.length - 1;

  // Comparing users move to the game sequence //
  if (dataId === game.currentGame[currentMoveIndex]) {
    console.log("Matching!");
    // Checking if the user has completed the sequence //
    if (game.usersMoves.length === game.currentGame.length) {
      console.log("Sequence Complete!");
      // Resetting the moves for the next round //
      game.usersMoves = [];
    }
  } else {
    console.log("Game Over");
    game.buttons.forEach((button) =>
      button.removeEventListener("click", () => userInputHandler(button))
    );
    // Optionally, reset the game state here
    game.usersMoves = [];
  }
  console.log(game.usersMoves);
}
// Pushing buttons to current game//
function startCombination() {
  const buttons = document.querySelectorAll(".square");
  if (buttons) {
    buttons.forEach((button) => {
      game.currentGame.push(button.dataset.id);
    });
    game.currentGame.sort(() => Math.random() - 0.5);
  }
  console.log(game.currentGame);
}

document;
// get start button by id, add event listner and call startCombination().

// The pure game state //
let game = {
  score: 0,
  currentGame: [],
  usersMoves: [],
  buttons: [],
};

// Needed to clear usersmoves array //

/*
function addTurn() {
  game.usersMoves = [];
  game.currentGame.push(game.buttons[Math.floor(Math.random() * 4)]);
  console.log(game.buttons[Math.floor(Math.random() * 4)]);
  //showTurns();
} 
*/

// start of a new game //
function newGame() {
  game.score = 0;
  game.usersMoves = [];
  game.currentGame = [];
  game.buttons = [];
  showScore();
  //addTurn();
  startCombination();
  flashLightsOn();
}

// Show score - to incremement? //
function showScore() {
  document.getElementById("scores").innerText = game.score;
}

// To actually flash the lights on //
function flashLightsOn() {
  game.currentGame.forEach((gameId, index) => {
    const element = document.querySelector(`[data-id="${gameId}"]`);
    if (element) {
      setTimeout(() => {
        element.classList.add("light");
        setTimeout(() => {
          element.classList.remove("light");
        }, 300);
      }, index * 600); // 600ms delay between each light flash
    }
  });
}
