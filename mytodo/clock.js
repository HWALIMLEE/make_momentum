const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

function getClock(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2,'0');
    const seconds = date.getSeconds().toString().padStart(2,'0');
    const hoursForm = (hours> 12) ? (hours- 12).toString().padStart(2,'0') : hours.toString().padStart(2,'0');
    clockText = `${hoursForm}:${minutes}:${seconds}`
    clock.innerText = (hours > 12) ? `${clockText} PM`: `${clockText} AM`
}

week.innerText = `🌞 ${weekday[new Date().getDay()]}`;
getClock();
setInterval(getClock, 1000);
