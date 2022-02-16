const clock = document.querySelector(".js-clock");

function getClock(){
    const date = new Date();
    const christmas = new Date('2022-12-25T00:00:00');
    const diffDate = (christmas.getTime() - date.getTime())/1000;
    const days = Math.floor(diffDate / (60*60*24));
    const hour = (Math.floor(diffDate / 3600) % 24).toString().padStart(2,'0');
    const minutes = (Math.floor(diffDate / 60) % 60).toString().padStart(2,'0');
    const seconds = (Math.floor(diffDate %60)).toString().padStart(2,'0');
    clock.innerText = `${days}d ${hour}h ${minutes}m ${seconds}s`
}

getClock(); //웹사이트가 로드 되자마자 실행
setInterval(getClock, 1000); // 1초마다 실행




