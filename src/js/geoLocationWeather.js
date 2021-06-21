import { displayWeather } from "./displayWeather.js";

export const geoSuccess = async (position) => {
  try {
    const { latitude: lat, longitude: lon } = position.coords;
    const res = await fetch(
      `./.netlify/functions/getDataFromCoords?lat=${lat}&lon=${lon}`
    );
    const data = await res.json();
    displayWeather(data);
  } catch (error) {
    console.error(error.code,error.message);
  }
};

export const geoError = function (error) {
  alert("Unable to retrieve your location");
  console.error(error.code, error.message);
};
