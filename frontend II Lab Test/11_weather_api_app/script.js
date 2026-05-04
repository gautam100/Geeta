const cityInput = document.querySelector("#cityInput");
const searchBtn = document.querySelector("#searchBtn");
const weatherResult = document.querySelector("#weatherResult");

const getWeather = async () => {
  const city = cityInput.value.trim();

  if (!city) {
    weatherResult.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  try {
    weatherResult.innerHTML = "<p>Loading weather data...</p>";

    // Step 1: Convert city name into latitude and longitude
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;
    const geoResponse = await fetch(geoUrl);
    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
      weatherResult.innerHTML = "<p>City not found. Try another city.</p>";
      return;
    }

    const { name, country, latitude, longitude } = geoData.results[0];

    // Step 2: Fetch current weather using latitude and longitude
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    const { temperature, windspeed, weathercode } = weatherData.current_weather;

    weatherResult.innerHTML = `
      <div class="result">
        <h2>${name}, ${country}</h2>
        <p class="temp">${temperature}°C</p>
        <p>Wind Speed: ${windspeed} km/h</p>
        <p>Weather Code: ${weathercode}</p>
      </div>
    `;
  } catch (error) {
    weatherResult.innerHTML = "<p>Something went wrong. Please try again.</p>";
    console.error(error);
  }
};

searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    getWeather();
  }
});
