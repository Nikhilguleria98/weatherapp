const apiKey = "3a8540d0f730789da44b470a26d5be18"
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const box = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weatherImg = document.querySelector(".weather-img");



async function checkWeather(city) {
    const response = await fetch(URL + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data)

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";

if (data.weather[0].main =="Clear"){
    weatherImg.src = "clear.png";
}
else if (data.weather[0].main =="Rain"){
    weatherImg.src = "rain.png";
}
else if (data.weather[0].main =="Drizzle"){
    weatherImg.src = "drizzle.png";
}
else if (data.weather[0].main =="Mist"){
    weatherImg.src = "mist.png";
}
else if (data.weather[0].main =="Clouds"){
    weatherImg.src = "clouds.png";
}
else if (data.weather[0].main =="Snow"){
    weatherImg.src = "snow.png";
}


}
btn.addEventListener("click",()=>{
    checkWeather(box.value);
})

box.addEventListener("keyup",(evt)=>{
    if (evt.key=="Enter"){
        checkWeather(box.value);
    }
 
})



