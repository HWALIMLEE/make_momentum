const loginForm = document.querySelector("#login-form");  //id는 #, class는 .
const loginInput = loginForm.querySelector("input");
// = const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");

function onLoginSubmit(event){ //첫번째 argument로 발생된 event에 대한 정보제공
    event.preventDefault(); // 어떤 event의 기본행동이든지 발생되지 않도록 막는 것(stop!)
    const username = loginInput.value; //input의 value를 얻을 수 있음
    console.log(username);
}
// loginButton.addEventListener("click",handleLoginClick);

// click이 아닌 submit감지
// submit은 엔터를 누르거나 버튼을 클릭할 때 발생
// submit의 기본 동작은 refresh --> 이 refresh를 막는 방법은?
loginForm.addEventListener("submit", onLoginSubmit);