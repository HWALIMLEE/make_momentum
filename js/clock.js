const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); //웹사이트가 로드 되자마자 실행
setInterval(getClock, 1000); // 1초마다 실행

// setTimeout(sayHello, 5000); // 5초 후 실행


