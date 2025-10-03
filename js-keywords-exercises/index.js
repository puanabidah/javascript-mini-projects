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
