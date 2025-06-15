let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 5;

document.getElementById("attempts").innerText = `Attempts left: ${attemptsLeft}`;

function checkGuess() {
  const userGuess = Number(document.getElementById("guessInput").value);
  let message = "";

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message = "Please enter a number between 1 and 100!";
  } else if (userGuess === secretNumber) {
    message = "🎉 Correct! You read my mind!";
    confetti();
    disableInput();
  } else if (userGuess > secretNumber) {
    message = "📈 Too high!";
  } else {
    message = "📉 Too low!";
  }

  attemptsLeft--;
  document.getElementById("attempts").innerText = `Attempts left: ${attemptsLeft}`;

  if (attemptsLeft === 0 && userGuess !== secretNumber) {
    message += ` 💀 Game over! The number was ${secretNumber}`;
    disableInput();
  }

  document.getElementById("result").innerText = message;
}

function disableInput() {
  document.getElementById("guessInput").disabled = true;
}

// Cute confetti (if you want to link a confetti lib)
function confetti() {
  // You could use a library like canvas-confetti or just alert for now
  alert("✨ Confetti! You won! ✨");
}
