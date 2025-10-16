// DICE ROLLER PROGRAM

function rollDice() {
  const numOfDice = Number(document.getElementById('numOfDice').value);
  const diceResult = document.getElementById('diceResult');
  const diceImages = document.getElementById('diceImages');
  const values = [];
  const images = [];

  // 3 dice => 3 kali iterasi buat random number
  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    // push them into our array
    values.push(value);
    images.push(`<img src='./assets/dice${value}.png'
        alt='Dice ${value}'>`);
  }
  diceResult.textContent = `Your dice: ${values.join(', ')}`;
  diceImages.innerHTML = images.join('');
}
