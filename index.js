const apiKey = "dd7f1b2fddea3a64d9ad43031cbd5c2f"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=bengaluru&units=metric"

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = response.json()
    console.log(data);
    
    
}

checkWeather();