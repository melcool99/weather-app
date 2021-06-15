import { geoSuccess, geoError } from "./geoLocationWeather.js";
import { inputLocationWeather } from "./inputLocationWeather.js";

const searchField = document.querySelector(".searchBar-text");
const searchBar = document.querySelector(".searchBar-button");

if (!navigator.geolocation) {
  alert("Geolocation is not supported by your browser");
} else {
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}


function getInput(event) {
  event.preventDefault();
  if (event.type == "click" || event.type == "Enter") {
    // check for bad input
    const letterNumber = /\d/;
    if (searchField.value.match(letterNumber) || searchField.value.trim().length === 0){alert("Please provide a location")}
    inputLocationWeather(searchField.value);
  }
  // clear search field
  searchField.value = "";
}

searchBar.addEventListener("click", getInput);
searchBar.addEventListener("keypress", getInput);
