// ROCK PAPER SCISSORS GAME

const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const scoreDisplay = document.getElementById('scoreDisplay');
let playerScore = 0;
let tieScore = 0;
let computerScore = 0;
let result = '';
const rules = {
  rock: 'scissors', // rock beats scissors
  paper: 'rock', // paper beats rock
  scissors: 'paper', // scissors beats paper
};

function playGame(playerChoice) {
  // reset color result display
  resultDisplay.classList.remove('textRed', 'textGreen');

  // computer choice
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  computerDisplay.textContent = `COMPUTER: ${capitalized(computerChoice)}`;

  // user choice
  playerDisplay.textContent = `PLAYER: ${capitalized(playerChoice)}`;

  // compare choices
  if (rules[playerChoice] === computerChoice) {
    result = `YOU WIN! 🥳`;
    resultDisplay.classList.add('textGreen');
    playerScore++;
  } else if (playerChoice === computerChoice) {
    result = `IT'S A TIE! 🤝`;
    tieScore++;
  } else {
    result = 'YOU LOSE! 😥';
    resultDisplay.classList.add('textRed');
    computerScore++;
  }
  updateDisplay();
}

function updateDisplay() {
  resultDisplay.classList.add('show');
  scoreDisplay.classList.add('show');

  resultDisplay.textContent = result;
  scoreDisplay.textContent = `YOU: ${playerScore} | TIES: ${tieScore} | COMPUTER: ${computerScore}`;
}

function capitalized(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
