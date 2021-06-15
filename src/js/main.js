import { geoSuccess, geoError } from "./geoLocationWeather.js";
import { inputLocationWeather } from "./inputLocationWeather.js";

const searchField = document.querySelector(".searchBar-text");
const searchBar = document.querySelector(".searchBar-button");

if (!navigator.geolocation) {
  alert("Geolocation is not supported by your browser");
} else {
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}

function getInput (event) {
  event.preventDefault();
  if (event.type == "click" || event.type =="Enter") {
    inputLocationWeather(searchField.value);
  }
};

searchBar.addEventListener("click", getInput);
searchBar.addEventListener("keypress", getInput)
