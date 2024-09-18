// api key: ef0bb98c93553787e5279e4d6e7129f4
// url: https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=ef0bb98c93553787e5279e4d6e7129f4&units=metric


const apiKey = "ef0bb98c93553787e5279e4d6e7129f4"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const cityInput = document.querySelector(".city");
const btn = document.querySelector(".searchCity");
const weatherIcon = document.querySelector(".weather-icon");
// const weathername = document.querySelector(".weatherName");

async function WeatherData(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidiyValue").innerHTML = data.main.humidity + "%";
    document.querySelector(".windSpeed").innerHTML = data.wind.speed + "km/hr";
    // document.getElementById("weatherName").innerHTML = data.weather[0].main;

    if (data.weather[0].main == "Clear" ){
        weatherIcon.src = "clear.png";
        // weathername.innerHTML = "Clear";
    }
    else if (data.weather[0].main == "Clouds" ){
        weatherIcon.src = "clouds.png"
        // weathername.innerHTML = "Clouds";
    }
    else if (data.weather[0].main == "Drizzle" ){
        weatherIcon.src = "drizzle.png"
        // weathername.innerHTML = "Drizzle";
    }
    else if (data.weather[0].main == "Mist" ){
        weatherIcon.src = "mist.png"
        // weathername.innerHTML = "Mist";
    }
    else if (data.weather[0].main == "Rain" ){
        weatherIcon.src = "rain.png"
        // weathername.innerHTML = "Rain";
    }
    else if (data.weather[0].main == "Snow" ){
        weatherIcon.src = "snow.png"
        // weathername.innerHTML = "Snow";
    }
    else if (data.weather[0].main == "Haze" ){
        weatherIcon.src = "haze.png"
        // weathername.innerHTML = "Haze";
    }
}

btn.addEventListener("click", ()=>{
    WeatherData(cityInput.value);
}
)

