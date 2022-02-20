const images = [
  "macbackground1.png",
  "macbackground2.png"
]
const body = document.querySelector("body");
const chosenImage = images[Math.floor(Math.random() * images.length)];
body.style.backgroundImage = "url('" + `img/${chosenImage}` + "')";
