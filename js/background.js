const images = [
    "image01.jpeg",
    "image02.jpeg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

//javascript에 생성해서 html에 넣기(이미지 추가하기 위해서는 html에 바로할 수 없음)

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`

//image를 body에 추가하기
document.body.appendChild(bgImage);