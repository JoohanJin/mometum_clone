// openweathermap.org api keys
const API_KEY = "93685267a9c0cee921b08fd56aee76cc";


function onSucess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const BASIC_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    const city = document.querySelector("#weather span:first-child");
    const weather = document.querySelector("#weather span:last-child");
    fetch(BASIC_URL).then(
        response => response.json()
        ). then(
            data => {
                city.innerText = `${data.name}, ${data.sys.country} `;
                weather.innerText = `/ ${data.main.temp}°C, ${data.weather[0].main}`;
            }
        );
}

function onFail(){
    alert("We cannot find your location!")
}

navigator.geolocation.getCurrentPosition(onSucess, onFail);