import { displayWeather } from "./displayWeather.js";

export const inputLocationWeather = async (location) => {
  try {
    const response = await fetch(
      `/.netlify/functions/getDataFromInput?q=${location}`
    );
    const data = await response.json();
    displayWeather(data);
   
  } catch (error) { 
    const location = document.querySelector(".currentWeather-location");
    location.textContent =`Oups..  no weather data for this location`;
    console.error(error.code, error.message);
  }
};

