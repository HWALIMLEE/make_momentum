const quiz = document.querySelector("#game")
quiz.innerText = "Random Number Game!"

const gameForm = document.querySelector("#start")
const inputNumber = document.querySelector("#number");
const inputAnswer = document.querySelector("#answer");
const result = document.querySelector("#result p");
const final = document.querySelector("#result h4");

function handleResult(input, answer){   
    result.innerText = `You chose: ${input}, the machine chose: ${answer}.`
    if (parseInt(input) !== answer){
        final.innerText = "You lost! "
    }else{
        final.innerText = "You won!"
    }
}

function onSubmit(event){ 
    event.preventDefault(); 
    const number = inputNumber.value; 
    const myAnswer = inputAnswer.value;
    const mahcineAnswer = Math.round(Math.random() * number)
    handleResult(myAnswer, mahcineAnswer)
}


gameForm.addEventListener("submit", onSubmit);