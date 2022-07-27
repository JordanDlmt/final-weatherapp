function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#currentTemp");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let descriptionElement = document.querySelector("#currentCondition");
  descriptionElement.innerHTML = response.data.weather[0].description;

  let windElement = document.querySelector("#currentWind");
  windElement.innerHTML = Math.round(response.data.wind.speed);

  let humidityElement = document.querySelector("#currentHumidity");
  humidityElement.innerHTML = response.data.main.humidity;

  let dateElement = document.querySelector("#currentDate");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "c70433e7af84bfd05bd329a4cb014923";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
