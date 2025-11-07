// STOPWATCH PROGRAM
const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
// const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let startTime = 0;
let timeInterval = null;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timeInterval = setInterval(update, 10);
    console.log(timeInterval);
    isRunning = true;

    startBtn.textContent = 'Stop';
    startBtn.classList.remove('start', 'resume');
    startBtn.classList.add('stop');
  } else {
    clearInterval(timeInterval);
    elapsedTime = Date.now() - startTime;
    isRunning = false;

    startBtn.textContent = 'Resume';
    startBtn.classList.remove('start', 'stop');
    startBtn.classList.add('resume');
  }
}

function reset() {
  clearInterval(timeInterval);
  timeInterval = null;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = '00:00:00.00';

  startBtn.textContent = 'Start';
  startBtn.classList.remove('stop', 'resume');
  startBtn.classList.add('start');
}

function update() {
  elapsedTime = Date.now() - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let miliseconds = Math.floor((elapsedTime % 1000) / 10);

  const pad = (num, size = 2) => String(num).padStart(size, '0');

  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(
    miliseconds
  )}`;
}
