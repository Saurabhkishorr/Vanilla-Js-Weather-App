const apiKey = 'use your own apikey';
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weather = document.querySelector(".weather");
const backgroundimg = document.getElementById('content');





async function checkweather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        backgroundimg.style.background = "linear-gradient(135deg, #00feba, #5b548a)";
    } else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".climatetype").innerHTML = data.weather[0].main;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h ";

        if (data.weather[0].main == "Clouds") {
            backgroundimg.style.background = "url('clouds.jpg')center center/cover";
            weather.children.item(0).style.color = "darkblue";
            weather.children.item(2).style.color = "black";
        }
        else if (data.weather[0].main == "Clear") {
            backgroundimg.style.background = "url('clear.jpg')center center/cover";
            weather.children.item(0).style.color = "#fff";
            weather.children.item(2).style.color = "#fff";
        }
        else if (data.weather[0].main == "Rain") {
            backgroundimg.style.background = "url('rain.jpg')center center/cover";
            weather.children.item(0).style.color = "#fff";
            weather.children.item(2).style.color = "#fff";
        }
        else if (data.weather[0].main == "Drizzle") {

            backgroundimg.style.background = "url('drizzle.jpg')center center/cover";
            weather.children.item(0).style.color = "#fff";
            weather.children.item(2).style.color = "#fff";
        }
        else if (data.weather[0].main == "Mist") {

            backgroundimg.style.background = "url('mist.jpg')center center/cover";
            weather.children.item(0).style.color = "darkblue";
            weather.children.item(2).style.color = "black";
        }
        else if (data.weather[0].main == "Snow") {

            backgroundimg.style.background = "url('snow.jpg')center center/cover";
            weather.children.item(0).style.color = "#fff";
            weather.children.item(2).style.color = "#fff";
        }
        else if (data.weather[0].main == "Haze") {
            backgroundimg.style.background = "url('haze.jpg')center center/cover";
            weather.children.item(0).style.color = "#fff";
            weather.children.item(2).style.color = "#fff";
        }

        weather.style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}




searchBtn.addEventListener("click", () => {
    checkweather(searchbox.value);
    searchbox.value = "";
})

