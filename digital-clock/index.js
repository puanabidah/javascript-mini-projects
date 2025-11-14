// DIGITAL CLOCK PROGRAM

function updateClock() {
  const now = new Date();
  console.log(now);
  let hours = now.getHours();
  const meridiem = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  hours = hours.toString();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
  const myText = document.getElementById('clock');
  myText.textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);
