function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
}
function onGeoError(){
    alert("Can't find you. No weathre for you")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //get geolocation, (true, false)

