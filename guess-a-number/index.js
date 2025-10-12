// NUMBER GUESSING GAME
const minNum = 1;
const maxNum = 100;
const guessInput = document.getElementById('guessInput');
const result = document.getElementById('result');
const myButton = document.getElementById('myBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const minSpan = document.getElementById('min');
const maxSpan = document.getElementById('max');
const trialSpan = document.getElementById('trial');
let attempts = 0;
let answer;
let maxAttempts = 7;

// 0.0 * (100-1+1) + 1 = 1
// 0.9999 * (100-1+1) + 1 = 100
// if there is a case range 3 to 6:
// 0.0 * (6-3+1) + 3 = 3
// 0.3 * (6-3+1) + 3 = 4
// 0.5 * (6-3+1) + 3 = 5
// 0.9 * (6-3+1) + 3 = 6

function initGame() {
  attempts = 0;
  answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
  console.log(answer);
  guessInput.value = '';
  result.textContent = '';
  result.style.display = 'none';
  myButton.disabled = true;
  playAgainBtn.style.display = 'none';

  minSpan.textContent = minNum;
  maxSpan.textContent = maxNum;
  trialSpan.textContent = maxAttempts;
}

function endGame(message) {
  result.textContent = message;
  result.style.display = 'block';
  playAgainBtn.style.display = 'block';
  myButton.disabled = true;
}

function guessNumber() {
  const guess = Number(guessInput.value.trim());

  if (guess > maxNum || guess < minNum) {
    myButton.disabled = true;
    result.style.display = 'block';
    result.textContent = `Please, enter a valid number!`;
    return;
  }

  attempts++;
  console.log(attempts);
  result.style.display = 'block';
  guessInput.value = '';

  if (guess < answer) {
    result.textContent = `Number ${guess} is TOO LOW! Try again. \nYou have ${
      maxAttempts - attempts
    } attempts left.`;
    myButton.disabled = true;
  } else if (guess > answer) {
    result.textContent = `Number ${guess} is TOO HIGH! Try again. \nYou have ${
      maxAttempts - attempts
    } attempts left.`;
    myButton.disabled = true;
  } else {
    endGame(
      `🎉 CORRECT! The answer was ${answer}. \nIt took you ${attempts} attempts to guess this number.`
    );
  }

  if (attempts >= maxAttempts && guess !== answer) {
    endGame(`💀 You lose! The correct number was ${answer}`);
  }
}

guessInput.addEventListener('input', function () {
  if (guessInput.value.trim() === '') {
    myButton.disabled = true;
  } else {
    myButton.disabled = false;
  }
});

myButton.addEventListener('click', () => {
  if (!myButton.disabled) {
    guessNumber();
  }
});

playAgainBtn.addEventListener('click', () => {
  initGame();
});

initGame();
