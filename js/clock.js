const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = date.getHours().toString().padStart(2,'0');
    const minutes = date.getMinutes().toString().padStart(2,'0');
    const seconds = date.getSeconds().toString().padStart(2,'0');
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock(); //웹사이트가 로드 되자마자 실행
setInterval(getClock, 1000); // 1초마다 실행

// setTimeout(sayHello, 5000); // 5초 후 실행


