// POKEMON HUNT PROGRAM
const errorMessage = document.getElementById("errorMessage");
const img = document.getElementById("pokemonSprites");

async function getData() {
  const pokemonNameInput = document
    .getElementById("pokemonNameInput")
    .value.toLowerCase()
    .trim();

  clearState();

  if (!pokemonNameInput) {
    showError("Enter the Pokémon name first!");
    return;
  }

  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNameInput}`
    );

    if (!res.ok) throw new Error(`Not Found!`);

    const data = await res.json();

    if (!data.sprites.front_default)
      throw new Error(`No default sprite available!`);

    showImage(data.sprites.front_default);
  } catch (error) {
    showError(error.message);
  }
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
}

function showImage(src) {
  img.src = src;
  img.classList.remove("hidden");
}

function clearState() {
  errorMessage.textContent = "";
  img.src = "";
  errorMessage.classList.add("hidden");
  img.classList.add("hidden");
}
