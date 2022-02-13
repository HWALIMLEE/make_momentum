function onGeoOk(position){
    console.log(position);
}
function onGeoError(){
    alert("Can't find you. No weathre for you")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //get geolocation, (true, false)

