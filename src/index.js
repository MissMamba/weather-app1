
let dayTime = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let currentDay = days[dayTime.getDay()];
let currentHour = dayTime.getHours();
if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}
let currentMinutes = dayTime.getMinutes();
if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}
let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${currentDay} ${currentHour}:${currentMinutes}`;

let searchForm = document.querySelector("#search-city");
searchForm.addEventListener("submit", displayCity);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);
function displayTemp(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}
function displayCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input").value;
  let apiKey = "c3186f97743fe49da7e30e3f6ed6a3fb";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayTemp);
}
function convertToFahrenheit(event) {
  event.preventDefault();
  let tempUnit = document.querySelector("#current-temp");
  let symbolTemp = tempUnit.innerHTML;
  symbolTemp = Number(symbolTemp);
  tempUnit.innerHTML = Math.round((symbolTemp * 9) / 5 + 32);
}
