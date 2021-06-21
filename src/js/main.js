import { geoSuccess, geoError } from "./geoLocationWeather.js";
import { inputLocationWeather } from "./inputLocationWeather.js";

const initApp = () => {
  const searchField = document.querySelector(".searchBar-text");
  const searchBtn = document.querySelector(".searchBar-button");
  const mainInfo = document.querySelector("#main");

  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
  } else {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  }

  const getInput = function (event) {
    event.preventDefault();
    inputLocationWeather(searchField.value);
    mainInfo.classList.remove("fade-in");
    void mainInfo.offsetWidth;
    mainInfo.classList.add("fade-in");
    searchField.value = "";
  }

  searchBtn.addEventListener("click", getInput);
  searchBtn.addEventListener("keypress", getInput);
};

document.addEventListener("DOMContentLoaded", initApp);
