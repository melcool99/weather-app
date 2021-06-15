const temperature = document.querySelector(".temp");
const location = document.querySelector(".currentWeather-location");
const highTemp = document.querySelector(".high-temp");
const lowTemp = document.querySelector(".low-temp");
const conditions = document.querySelector(".conditions");
const feelsLike = document.querySelector(".feels-like");
const hum = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const icn = document.querySelector(".icon");

export const displayWeather = (data) => {
  const name = data.name;
  const { temp, humidity, feels_like, temp_min, temp_max } = data.main;
  const { speed } = data.wind;
  const { description, icon } = data.weather[0];
  const feels = Math.round(feels_like)
  const tempRound = Math.round(temp)
  const tempMax = Math.round(temp_max)
  const tempMin = Math.round(temp_min)
  temperature.textContent = `${tempRound}°`;
  location.textContent = name;
  highTemp.textContent = `high: ${tempMax}°`;
  lowTemp.textContent = `low: ${tempMin}°`;
  conditions.textContent = description;
  hum.textContent = `humidity: ${humidity}%`;
  feelsLike.textContent = `feels like: ${feels}`;
  windSpeed.textContent = `wind speed: ${speed} km/h`;
  icn.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
};
