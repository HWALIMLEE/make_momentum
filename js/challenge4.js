const clock = document.querySelector(".js-clock");

function getClock(){
    const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
    const now = new Date();
    const difference = new Date(xmasDay - now);
    const secondsInMs = Math.floor(difference / 1000);
    const minutesInMs = Math.floor(secondsInMs / 60);
    const hoursInMs = Math.floor(minutesInMs / 60);
    const days = Math.floor(hoursInMs / 24);

    const seconds = secondsInMs % 60;
    const minutes = minutesInMs % 60;
    const hours = hoursInMs % 24;
    
    const daysStr = days.toString().padStart(2,'0');
    const hoursStr = hours.toString().padStart(2,'0');
    const minutesStr = minutes.toString().padStart(2,'0');
    const secondsStr = seconds.toString().padStart(2,'0');
    clock.innerHTML = `${daysStr}d ${hoursStr}h ${minutesStr}m ${secondsStr}s`;
}
getClock(); //웹사이트가 로드 되자마자 실행
setInterval(getClock, 1000); // 1초마다 실행




