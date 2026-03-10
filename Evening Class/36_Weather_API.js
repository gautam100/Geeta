const API_KEY = "69679944bea740b49bd111946261004";// Get your own free API key at https://www.weatherapi.com
//53
function fetchWeather(city = "London") {
  const endPoint = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(
    city
  )}&aqi=no`;

  const container = document.getElementById("container");
  container.innerHTML = `<div class="card loading">Loading…</div>`;

  return fetch(endPoint)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((data) => {
      renderWeather(data);
      return data;
    })
    .catch((err) => {
      container.innerHTML = `<div class="card error">Could not get weather for "${city}".<br>${err.message}</div>`;
      console.error(err);
    });
}

function renderWeather(data) {
  const container = document.getElementById("container");
  if (!data || !data.location) {
    container.innerHTML = `<div class="card error">No data returned.</div>`;
    return;
  }

  const { location, current } = data;
  const icon = `https:${current.condition.icon}`;

  container.innerHTML = `
    <article class="card">
      <div class="card-header">
        <div class="place">
          <h2>${location.name}</h2>
          <p class="region">${location.region} • ${location.country}</p>
        </div>
        <div class="temp">
          <img src="${icon}" alt="${current.condition.text}" />
          <div class="degrees">${current.temp_c}°C</div>
        </div>
      </div>
      <div class="condition">${current.condition.text}</div>
      <ul class="meta">
        <li>Feels: ${current.feelslike_c}°C</li>
        <li>Humidity: ${current.humidity}%</li>
        <li>Wind: ${current.wind_kph} kph</li>
      </ul>
    </article>
  `;
}

// Wire up search form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("searchForm");
  const input = document.getElementById("cityInput");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = input.value.trim();
    if (city) fetchWeather(city);
  });

  // Allow Enter in input to search
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      form.dispatchEvent(new Event("submit"));
    }
  });

  // Load a default city on first open
  fetchWeather();
});
