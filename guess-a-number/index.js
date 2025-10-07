// NUMBER GUESSING GAME
const minNum = 1;
const maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
console.log(answer);

// 0.0 * (100-1+1) + 1 = 1
// 0.9999 * (100-1+1) + 1 = 100
// if there is a case range 3 to 6:
// 0.0 * (6-3+1) + 3 = 3
// 0.3 * (6-3+1) + 3 = 4
// 0.5 * (6-3+1) + 3 = 5
// 0.9 * (6-3+1) + 3 = 6

let attempts = 0;
let guess;
let running = true;

while (running) {
  // accept user input
  guess = window.prompt(`Guess a number between ${minNum}-${maxNum}`);

  // check if user cancel input
  if (guess === null) {
    break;
  }

  // check empty input ("" or just spaces)
  if (guess.trim() === '') {
    window.alert('Please type a number');
  }

  guess = Number(guess); // typecast the input from string to number

  if (isNaN(guess)) {
    window.alert(`please type a valid number`);
  } else if (guess > maxNum || guess < minNum) {
    window.alert(`Sorry, your number is out of range`);
  } else {
    attempts++;
    if (guess < answer) {
      window.alert(`TOO LOW! TRY AGAIN`);
    } else if (guess > answer) {
      window.alert(`TOO HIGH! TRY AGAIN`);
    } else {
      window.alert(
        `CORRECT! The answer was ${answer}. It took you ${attempts} attempts`
      );
      running = false; // exit the game
    }
    console.log(attempts);
  }
}
