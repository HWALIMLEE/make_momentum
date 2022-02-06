const loginForm = document.querySelector("#login-form");  //id는 #, class는 .
const loginInput = loginForm.querySelector("input");
// = const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden"; //대문자로 적는게 관습
const USERNAME_KEY = "username";

function onLoginSubmit(event){ //첫번째 argument로 발생된 event에 대한 정보제공
    event.preventDefault(); // 어떤 event의 기본행동이든지 발생되지 않도록 막는 것(stop!)
    const username = loginInput.value; //input의 value를 얻을 수 있음
    loginForm.classList.add(HIDDEN_CLASSNAME); // name을 제출한 다음 hidden
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = `Hello ${username}!` 
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreeting(username);
}

function onLoginBtnClick() {
    const username = loginInput.value; // username길이에 대한 조건은 index.html에 작성
    console.log(username);
}
// loginButton.addEventListener("click",handleLoginClick);

// click이 아닌 submit감지
// submit은 엔터를 누르거나 버튼을 클릭할 때 발생
// submit의 기본 동작은 refresh --> 이 refresh를 막는 방법은?

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); //submitevent
}else{
    // show the greeting
    paintGreeting(savedUsername);
}