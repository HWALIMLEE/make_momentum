const text = document.querySelector("h2");

const superEventHandler = {
    handleMouseOn() {
      text.innerText = "The mouse is here!";
      text.style.color = "lightgreen";
    },
    handleMouseOut() {
      text.innerText = "The mouse is gone!";
      text.style.color = "lightblue";
    },
    handleMouseRightClick() {
      text.innerText = "That was a right click!";
      text.style.color = "orange";
    },
    handleResize() {
      text.innerText = "You just resized!";
      text.style.color = "purple";
    }
  };
  
text.onmousemove = superEventHandler.handleMouseOn;
text.onmouseleave = superEventHandler.handleMouseOut;
window.oncontextmenu = superEventHandler.handleMouseRightClick;
window.onresize = superEventHandler.handleResize;
  
// text.addEventListener("mousemove",handleMouseOn);
// text.addEventListener("mouseleave",handleMouseOut);
// window.addEventListener("contextmenu", handleMouseRightClick);
// window.addEventListener("resize", handleResize);

