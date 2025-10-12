const myText = document.getElementById('myText');
const submitBtn = document.getElementById('myBtn');
const result = document.getElementById('result');
let age;

submitBtn.onclick = function () {
  const input = myText.value.trim();
  age = Number(input);
  result.style.display = 'block';

  if (input === '') {
    result.textContent = 'You must enter a number.';
    myText.value = '';
    return;
  }

  if (isNaN(age)) {
    result.textContent = `You must enter a number.`;
  } else if (age < 0) {
    result.textContent = `Your age can't be below 0.`;
  } else if (age === 0) {
    result.textContent = `Your age is ${age} years old.\nYou can't enter. You were just born.`;
  } else if (age >= 100) {
    result.textContent = `Your age is ${age} years old.\nYou are TOO OLD to enter this site.`;
  } else if (age >= 18) {
    result.textContent = `Your age is ${age} years old.\nYou are old enough to enter this site.`;
  } else {
    result.textContent = `Your age is ${age} years old.\nYou must be 18+ to enter this site.`;
  }

  myText.value = '';
};
