// COUNTER PROGRAM
const decreaseBtn = document.getElementById('decreasetBtn');
const increaseBtn = document.getElementById('increasetBtn');
const resetBtn = document.getElementById('resetBtn');
const counterLabel = document.getElementById('counterLabel');
let count = 0;

increaseBtn.onclick = function () {
  count++;
  counterLabel.textContent = count;
};

decreaseBtn.onclick = function () {
  if (Number(counterLabel.textContent) == 0) {
    count = 0;
  } else {
    count--;
  }
  counterLabel.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  counterLabel.textContent = count;
};
