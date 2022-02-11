const body = document.querySelector("body");

function handleResize(){
    if (window.innerWidth > 1000){
        body.classList = "bigsize";
    }else if(window.innerWidth < 800){
        body.classList = "smallsize"
    }else{
       body.classList.remove("bigsize");
       body.classList.remove("smallsize");
    }
}
window.onresize = handleResize;