// Function to display intructions //
function howTo() {
  const howToPlay = document.getElementById("how-to-play");
  if (howToPlay.style.display === "none") {
    howToPlay.style.display = "block";
  } else {
    howToPlay.style.display = "none";
  }
}

// The pure game state //
const game = {
  score: 0, // Users Score
  currentGame: [], // Game Sequence
  usersMoves: [], // Users Sequence
  buttons: [], // In Game Buttons
  eventHandlers: [], // Stores the Clicks so I can remove it later
  isDisplayingSequence: false, //control user input during sequence display
};

// Function to update the score display
function updateScores() {
  const scoreEl = document.getElementById("scores");
  if (scoreEl) {
    scoreEl.textContent = "Score: " + game.score;
  } else {
    console.error("Score element not found!");
  }
}

// Listening for user input //
document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("startButton");
  startButton.addEventListener("click", startNewGame);
});

// Adding .light css class //
function userClickHandler(event) {
  if (!game.isDisplayingSequence) {
    const button = event.target;
    button.classList.add("light");
    setTimeout(function () {
      button.classList.remove("light");
    }, 300);

    const dataId = button.dataset.id;
    game.usersMoves.push(dataId);
    console.log("Button", dataId);

    // Geting the index of the current move in the sequence //
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
        addMove();
        flashLightsOn();

        // should disable users input during flash//
        game.isDisplayingSequence = true;
        setTimeout(() => {
          game.isDisplayingSequence = false;
        }, game.currentGame.length * 1000);
      }
    } else {
      console.log("Game Over");
      window.alert("Ohh no, wrong button! Game over..");
      removeEventClick(); // To remove the click event listeners when game is over //
      game.score = 0; // resetting game users score //
      console.log("Score reset:", game.score);
      updateScores(); // updates display //

      // Resetting the game state here //
      game.usersMoves = [];
      game.currentGame = [];
    }
    console.log(game.usersMoves);
  }
}

// Adding Click Event Listener to Buttons //
function userInputHandler() {
  game.buttons = document.querySelectorAll(".square");
  game.buttons.forEach((button) => {
    const clickHandler = function (event) {
      userClickHandler(event);
    };
    game.eventHandlers.push({ button, clickHandler });
    button.addEventListener("click", clickHandler);
  });
}

// Removing Click Event Listeners //
function removeEventClick() {
  game.eventHandlers.forEach(({ button, clickHandler }) => {
    button.removeEventListener("click", clickHandler);
  });
  game.eventHandlers = []; // Emptying this array of clicks //
}

// New game //
function startNewGame() {
  game.currentGame = [];
  game.usersMoves = [];
  game.score = 0;
  console.log("Started New Game. Score reset:", game.score);
  updateScores();

  // Remove existing event listeners
  removeEventClick();

  // Start a new sequence
  startCombination();
  flashLightsOn();

  // Disable user input during sequence display
  game.isDisplayingSequence = true;
  setTimeout(() => {
    game.isDisplayingSequence = false;
    userInputHandler(); // Enable user input after starting the game
  }, game.currentGame.length * 1000);
}

function addMove() {
  const buttons = document.querySelectorAll(".square");
  if (buttons.length > 0) {
    const randomButton = buttons[Math.floor(Math.random() * buttons.length)];
    game.currentGame.push(randomButton.dataset.id);
  }
  console.log(game.currentGame);
}
// Pushing buttons to current game//
function startCombination() {
  game.currentGame = [];
  const buttons = document.querySelectorAll(".square");
  if (buttons) {
    buttons.forEach((button) => {
      game.currentGame.push(button.dataset.id);
    });
    game.currentGame = game.currentGame.slice(0, game.sequenceLength); // Set sequence length
    game.currentGame.sort(() => Math.random() - 0.5);
  }
  console.log(game.currentGame);
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
      }, index * 1000);
    }
  });
}