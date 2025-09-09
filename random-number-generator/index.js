// It will generate a random number like a dice roll between min and max (inclusive), without variables it would be Math.floor(Math.random() * 6) + 1
const min = 1;
const max = 6;
let randomNumValue;
let rollBtn = document.getElementById('rollBtn');
let randomNumLabel = document.querySelectorAll(
  '#randomNum1, #randomNum2, #randomNum3'
);
let titleDice = document.querySelectorAll('.dice1, .dice2, .dice3');

rollBtn.onclick = function () {
  randomNumLabel.forEach((el) => {
    randomNumValue = Math.floor(Math.random() * (max - min + 1)) + min;
    el.textContent = randomNumValue;
    el.style.display = 'inline-block';
  });

  titleDice.forEach((el) => {
    el.style.display = 'inline-block';
  });
};
