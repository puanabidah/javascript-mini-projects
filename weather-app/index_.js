const form = document.querySelector(".weatherForm");
const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const errorDisplay = document.createElement("p");
const apiKey = "YOUR_API_KEY"; // Replace with your actual API key

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value.toLowerCase().trim();

  clearState();

  if (!city) {
    displayError("Please enter a city!");
    return;
  }

  const weatherData = await getWeatherData(city);

  if (!weatherData) return;

  displayWeatherInfo(weatherData);
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Not found!");
    }

    return await response.json();
  } catch (error) {
    displayError(error.message);
  }
}

function displayWeatherInfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, icon }],
  } = data;

  // city
  const cityDisplay = document.createElement("h1");
  cityDisplay.textContent = city;
  cityDisplay.classList.add("cityDisplay");

  // temperature
  const tempDisplay = document.createElement("p");
  tempDisplay.textContent = `${temp}°C`;
  tempDisplay.classList.add("tempDisplay");

  // emoji
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const emoji = document.createElement("img");
  emoji.src = iconUrl;
  emoji.alt = description.description;
  emoji.classList.add("weatherEmoji");

  // humidity
  const humidityDisplay = document.createElement("p");
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  humidityDisplay.classList.add("humidityDisplay");

  // description
  const descDisplay = document.createElement("p");
  descDisplay.textContent = `${capitalizedWord(description)}`;
  descDisplay.classList.add("descDisplay");

  // append children to card
  card.append(cityDisplay, tempDisplay, humidityDisplay, emoji, descDisplay);

  card.style.display = "flex";
}

function displayError(message) {
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");
  container.appendChild(errorDisplay);
}

function capitalizedWord(str) {
  return str
    .trim()
    .split(/\s+/)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

function clearState() {
  card.textContent = "";
  card.style.display = "none";
  errorDisplay.textContent = "";
}
