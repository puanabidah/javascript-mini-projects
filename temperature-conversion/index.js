// TEMPERATURE CONVERSION PROGRAM

const textBox = document.getElementById('textBox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelcius = document.getElementById('toCelcius');
const result = document.getElementById('result');

function convert() {
  const input = Number(textBox.value);
  let temp, unit;

  if (toFahrenheit.checked) {
    temp = input * (9 / 5) + 32;
    unit = '°F';
  } else if (toCelcius.checked) {
    temp = (input - 32) * (5 / 9);
    unit = '°C';
  } else {
    result.textContent = 'Select a unit!';
    return;
  }

  const decimals = temp.toString().split('.')[1]; // this must come after conversion

  if (decimals && decimals.length > 2) {
    // to check if the decimal digits more than 3 digits or not, if so then cut it to 3 decimal digits.
    temp = temp.toFixed(2);
  }

  return (result.textContent = `${temp}${unit}`);
}
