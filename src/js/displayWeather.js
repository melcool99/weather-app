const temperature = document.querySelector(".temp");
const location = document.querySelector(".currentWeather-location");
const highTemp = document.querySelector(".high-temp");
const lowTemp = document.querySelector(".low-temp");
const conditions = document.querySelector(".conditions");
const feelsLike = document.querySelector(".feels-like");
const hum = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const icn = document.querySelector(".icon");
const dateEl = document.querySelector(".date");


export const displayWeather = (data) => {
  const name = data.name;
  const { temp, humidity, feels_like, temp_min, temp_max } = data.main;
  const { speed } = data.wind;
  const { description, icon } = data.weather[0];
  const feels = Math.round(feels_like);


  temperature.textContent = `${Math.round(temp)}°`;
  location.textContent = name;
  highTemp.textContent = `high: ${Math.round(temp_max)}°`;
  lowTemp.textContent = `low: ${Math.round(temp_min)}°`;
  conditions.textContent = description;
  hum.textContent = `humidity: ${humidity}%`;
  feelsLike.textContent = `feels like: ${feels}`;
  windSpeed.textContent = `wind speed: ${speed} km/h`;
  icn.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  
  const date = new Date().toLocaleDateString(('en-GB'),{weekday: 'long', month: 'long', day: 'numeric'} );
  dateEl.textContent = date;



}


  
  


