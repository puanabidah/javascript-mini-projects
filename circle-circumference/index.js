// const = a variable that can't be changed

// case: count circumference of a circle
const PI = 3.14159;
let radius;
let circumference;

// add onclick to the button
document.getElementById('mySubmit').onclick = function () {
  // get the radius from the user
  radius = document.getElementById('myText').value;

  // typecast the radius to a number
  radius = Number(radius);

  if (isNaN(radius)) {
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
