const container = document.querySelector(".container");
const resultBox = document.getElementById("result");
const copyButton = document.getElementById("copyButton");
const labelPass = document.getElementById("labelPassDisplay");
const passwordText = document.getElementById("passwordText");
const errorInfo = document.getElementById("errorInfo");
const generatePasswordBtn = document.getElementById("generatePasswordBtn");

generatePasswordBtn.addEventListener("click", () => {
  const includeLowerCase = document.getElementById("includeLowerCase").checked;
  const includeUpperCase = document.getElementById("includeUpperCase").checked;
  const includeNumbers = document.getElementById("includeNumbers").checked;
  const includeSymbols = document.getElementById("includeSymbols").checked;
  const passwordLength = Number(document.getElementById("lengthInput").value);

  clearState();

  if (passwordLength < 6) {
    return errorMessage(`Password length must be at least 6 character`);
  }
  const password = generatePassword(
    passwordLength,
    includeLowerCase,
    includeUpperCase,
    includeNumbers,
    includeSymbols
  );

  if (password === undefined) {
    return;
  }
  displayPassword(password);
});

function generatePassword(
  length,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=";
  let allowedChars = "";
  let password = [];

  if (includeLowerCase) {
    password.push(randomChar(lowerCaseChars));
    allowedChars += lowerCaseChars;
  }
  if (includeUpperCase) {
    password.push(randomChar(upperCaseChars));
    allowedChars += upperCaseChars;
  }
  if (includeNumbers) {
    password.push(randomChar(numberChars));
    allowedChars += numberChars;
  }
  if (includeSymbols) {
    password.push(randomChar(symbolChars));
    allowedChars += symbolChars;
  }

  if (allowedChars.length === 0) {
    return errorMessage(`At least 1 set of character needs to be selected`);
  }

  while (password.length < length) {
    password.push(randomChar(allowedChars));
  }

  // Shuffle the password array to ensure randomness
  shufflePassword(password);

  password = password.join("");

  return password;
}

function shufflePassword(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function randomChar(str) {
  const randomIndex = Math.floor(Math.random() * str.length);
  return str[randomIndex];
}

function displayPassword(password) {
  resultBox.classList.remove("hidden");
  passwordText.textContent = password;
}

copyButton.addEventListener("click", () => {
  const textToCopy = passwordText.textContent;
  navigator.clipboard.writeText(textToCopy).then(
    () => {
      console.log("Text copied to clipboard");
    },
    (error) => {
      console.error("Failed to copy text: ", error);
    }
  );
});

function errorMessage(message) {
  errorInfo.classList.remove("hidden");
  errorInfo.textContent = message;
}

function clearState() {
  passwordText.textContent = "";
  resultBox.classList.add("hidden");

  errorInfo.textContent = "";
  errorInfo.classList.add("hidden");
}
