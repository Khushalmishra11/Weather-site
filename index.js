const apiKey = "dd7f1b2fddea3a64d9ad43031cbd5c2f";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".weather").style.display = "block"
  const icon = d
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
