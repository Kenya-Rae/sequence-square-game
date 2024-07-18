// The pure game state //
const game = {
  score: 0, // Users Score
  currentGame: [], // Game Sequence
  usersMoves: [], // Users Sequence
  buttons: [],  // In Game Buttons
  eventHandlers: [] // Stores the Clicks so I can remove it later
};

// Listening for user input //
document.addEventListener("DOMContentLoaded", () => {
  userInputHandler();
  newGame();
});

// Adding .light css class //
function userClickHandler(event) {
  const button = event.target;
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
    console.log("A Match!");
    // Checking if the user has completed the sequence //
    if (game.usersMoves.length === game.currentGame.length) {
      console.log("Sequence Is Complete!");
      game.score++; // incrementing score //
      console.log("Score:", game.score);
      updateScores(); // updates display //

      window.alert("Sequence Complete! Well Done!!");
      // Resetting the moves for the next round //
      game.usersMoves = [];
      startCombination();
      flashLightsOn();
    }
  } else {
    console.log("Game Over");
    window.alert("Ohh no, wrong button! Game over..");
    removeEventClick(); // To remove the click when game is over //
    game.score = 0; // resetting game users score //
    console.log("Score reset:", game.score);
    updateScores(); // updates display //

    // Resetting the game state here //
    game.usersMoves = [];
    game.currentGame = [];
  }
  console.log(game.usersMoves);
}

// Adding Click Event Listener to Buttons //
function userInputHandler() {
  game.buttons = document.querySelectorAll(".square");
  game.buttons.forEach((button) => {
    const clickHandler = function(event) { userClickHandler(event); };
    game.eventHandlers.push({ button, clickHandler });
    button.addEventListener("click", clickHandler);
  });
}

// Removing Click Event Listener//
function removeEventClick() {
  game.eventHandlers.forEach(({ button, clickHandler }) => {
    button.removeEventListener("click", clickHandler);
  });
  game.eventHandlers = []; //Emptying this array of clicks//
}

// New game //
function startNewGame() {
  game.currentGame = [];
  game.usersMoves = [];
  game.score = 0;
  console.log("Started New Game. Score reset:", game.score);
  updateScores();
  startCombination();
  flashLightsOn();
}

// Function to display real score //
function updateScores() {
  const scoreEl = document.getElementById("scores");
  scoreEl.textContent = "Score: " + game.score;
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

// Show score - to increment? //
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

// Start of a new game //
function newGame() {
  game.score = 0;
  game.usersMoves = [];
  game.currentGame = [];
  game.buttons = [];
  showScore();
  startCombination();
  flashLightsOn();
}
