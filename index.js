const apiKey = "dd7f1b2fddea3a64d9ad43031cbd5c2f";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    const icon = data.weather[0].main;
    switch (icon) {
      case "Clouds":
        document.querySelector(".weather-icon").src = "assest/clouds.png";
        break;
      case "Rain":
        document.querySelector(".weather-icon").src = "assest/rain.png";
        break;
      case "Clear":
        document.querySelector(".weather-icon").src = "assest/clear.png";
        break;
      case "Snow":
        document.querySelector(".weather-icon").src = "assest/snow.png";
        break;
      case "Drizzle":
        document.querySelector(".weather-icon").src = "assest/drizzle.png";
        break;
      case "Mist":
        document.querySelector(".weather-icon").src = "assest/mist.png";
        break;
      default:
        document.querySelector(".weather-icon").src = "assest/clouds.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
