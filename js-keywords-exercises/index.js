// .checked = property that determines the checked state of an HTML checkbox
// or radio button element

const mySubmit = document.getElementById('mySubmit');
const myCheckbox = document.getElementById('myCheckbox');
const visaBtn = document.getElementById('visaBtn');
const masterCardBtn = document.getElementById('masterCardBtn');
const paypalBtn = document.getElementById('payPalBtn');
const subResult = document.getElementById('subResult');
const payResult = document.getElementById('payResult');

mySubmit.onclick = function () {
  if (myCheckbox.checked) {
    subResult.textContent = `You are subscribed!`;
  } else {
    subResult.textContent = `You are NOT subscribed!`;
  }

  if (visaBtn.checked) {
    payResult.textContent = `You are paying with Visa.`;
  } else if (masterCardBtn.checked) {
    payResult.textContent = `You are paying with MasterCard.`;
  } else if (payPalBtn.checked) {
    payResult.textContent = `You are paying with PayPal.`;
  } else {
    payResult.textContent = `You must select a payment method!`;
  }
};

// ternary operator
let age = 15;
let message = age >= 18 ? 'You are an adult!' : 'You are a minor!';
console.log(message);

let time = 19;
let greeting = time < 18 ? 'Good day!' : 'Good evening!';
console.log(greeting);

let purchaseAmount = 99;
let discount = purchaseAmount > 100 ? 10 : 0;
console.log(
  `Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`
);

// switch statement can be effecient replacement for multiple if else if statements
let day = 7;

switch (day) {
  case 1:
    console.log('It is Monday');
    break;
  case 2:
    console.log('It is Tuesday');
    break;
  case 3:
    console.log('It is Wednesday');
    break;
  case 4:
    console.log('It is Thursday');
    break;
  case 5:
    console.log('It is Friday');
    break;
  case 6:
    console.log('It is Saturday');
    break;
  case 7:
    console.log('It is Sunday');
    break;
  default:
    console.log('Invalid day');
}

let testScore = 55;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = 'A';
    break;
  case testScore >= 80:
    letterGrade = 'B';
    break;
  case testScore >= 70:
    letterGrade = 'C';
    break;
  case testScore >= 60:
    letterGrade = 'D';
    break;
  default:
    letterGrade = 'F';
}

console.log(`Your letter grade is: ${letterGrade}`);
