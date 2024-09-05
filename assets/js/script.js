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

//Global variables//
const startButton = document.getElementById("startButton");
const scoreEl = document.getElementById("scores");

// Function to update the score display
function updateScores() {
  if (scoreEl) {
    scoreEl.textContent = "Score: " + game.score;
  } else {
    console.error("Score element not found!");
  }
}

// Listening for user input //
document.addEventListener("DOMContentLoaded", () => {
  startButton.addEventListener("click", startNewGame);
});

// Adding .light css class //
function userClickHandler(event) {
  if (!game.isDisplayingSequence) {
    const button = event.target;
    buttonLight(button);

    const dataId = button.dataset.id;
    game.usersMoves.push(dataId);
    // Conditins for game//
    if (checkUserCorrect(dataId)) {
      if (sequenceComplete()) {
        userSuccessful();
      }
    } else {
      gameOver();
    }
  }
}

// Add the light class //
function buttonLight(button) {
  button.classList.add("light");
  setTimeout(function () {
    button.classList.remove("light");
  }, 300);
}

//Checking if user sequence matches //
function checkUserCorrect(dataId) {
  // Geting the index of the current move in the sequence //
  const currentMoveIndex = game.usersMoves.length - 1;
  return dataId === game.currentGame[currentMoveIndex];
}

//Checking if user sequence is complete//
function sequenceComplete() {
  return game.usersMoves.length === game.currentGame.length;
}

//If statement conditions as function for winning and failing the game //
function userSuccessful() {
  game.score++; // incrementing score //
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

//If statement conditions as function for winning and failing the game //
function gameOver() {
  window.alert("Ohh no, wrong button! Game over..");
  removeEventClick(); // To remove the click event listeners when game is over //
  game.score = 0; // resetting game users score //
  updateScores(); // updates display //

  // Resetting the game state here //
  game.usersMoves = [];
  game.currentGame = [];
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
  updateScores();

  // Removing existing event listeners
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

//Adds a move to squares//
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

//Send email function //
function sendEmail() {
  // getting html form values//
  let param = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // Email validation regex pattern
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!param.email.trim() || !emailValid.test(param.email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!param.message.trim()) {
    alert("Please provide a message.");
    return;
  }

  if (!param.name.trim()) {
    alert("Please provide a valid name.");
    return;
  }
  // using emailjs to send this email with values (parameters) and alert when done//
  emailjs.send("service_t8jb8bs", "template_bwta55d", param).then(
    alert(
      "Email has now been sent! Please wait 3-5 working days for a response."
    ).catch((error) => {
      console.error("Failed to send email:", error);
      alert("There was an error sending your email.");
    })
  );
}

// Get the button:
let mybutton = document.getElementById("scrollUp");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
