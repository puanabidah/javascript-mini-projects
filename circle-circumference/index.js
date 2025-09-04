// const = a variable that can't be changed

// case: count circumference of a circle
const PI = 3.14159;
const radiusInput = document.getElementById('myText');
let circumference;
let clearBtn = document.getElementById('clearInput');
let submitBtn = document.getElementById('mySubmit');

// add onclick to the submit button
submitBtn.onclick = function () {
  // typecast the radius input to a number
  let radius = Number(radiusInput.value);

  // check if the input is a valid number
  if (isNaN(radius) || radius <= 0) {
    window.alert('Please enter a valid number');
  } else {
    // calculate the circumference
    circumference = 2 * PI * radius;

    // display the circumference
    document.getElementById(
      'myH3'
    ).textContent = `Circumference = ${circumference.toFixed(2)} cm`;
  }
};

// clear the input field when the clear button is clicked
clearBtn.onclick = function () {
  radiusInput.value = '';
  document.getElementById('myH3').textContent = '';
};
