function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = '5eb44c00a2ef7dc3dd5f5493d76321ba';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); //javascript가 url대신 부름, promise and then

}
function onGeoError(){
    alert("Can't find you. No weathre for you")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //get geolocation, (true, false)
